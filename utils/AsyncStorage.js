import {AsyncStorage} from 'react-native';
import {Notifications, Permissions} from 'expo';
export const DECKS_STORAGE_KEY = 'decks:mobile-flashcards';
const NOTIFICATION_KEY = 'notification:mobile-flashcards';
let information = {
    React: {
        title: 'React',
        questions: [
            {
                question: 'What is React?',
                answer: 'A library for managing user interfaces',
            },
            {
                question: 'Where do you make Ajax requests in React?',
                answer: 'The componentDidMount lifecycle event',
            }
        ]
    },
    JavaScript: {
        title: 'JavaScript',
        questions: [
            {
                question: 'What is a closure?',
                answer:
                    'The combination of a function and the lexical environment within which that function was declared.',
            }
        ]
    }
};
export function createDeck(deck) {
    return AsyncStorage.mergeItem(DECKS_STORAGE_KEY, JSON.stringify(deck));
}
export function fetchDecks() {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => {
        if(results === null){
            AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(information));
            return information;
        }
        else{
            return JSON.parse(results)
        }
    });
}



export function addQuestionForDeck({card, deckName}) {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY, (err, result) => {
        let decks = JSON.parse(result);
        console.log(decks)

        let newQuestions = JSON.parse(JSON.stringify(decks[deckName].questions));
        newQuestions[newQuestions.length] = card;

        const value = JSON.stringify({
            [deckName]: {title: deckName, questions: newQuestions},
        });

        AsyncStorage.mergeItem(DECKS_STORAGE_KEY, value);
    });
}

//Notification API
function returnNotification() {
    return {
        title: 'Mobile Flashcards',
        body: "New Question for the day",
        ios: {
            sound: true
        },
        android: {
            sound: true
        },
    };
}

export function sendNotification() {
    AsyncStorage.getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then(data => {
            if (!data) {
                Permissions.askAsync(Permissions.NOTIFICATIONS).then(({status}) => {
                    if (status === 'granted') {
                        Notifications.cancelAllScheduledNotificationsAsync().then(() => {
                            let today = new Date();
                            today.setDate(today.getDate());
                            today.setHours(23, 0, 0);

                            const notification = returnNotification();

                            Notifications.scheduleLocalNotificationAsync(notification, {
                                time: today,
                                repeat: 'day',
                            }).then(result => {

                            });
                        });

                        AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
                    }
                });
            }
        });
}
