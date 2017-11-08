import {AsyncStorage} from 'react-native';

export const DECKS_STORAGE_KEY = 'decks:mobile-flashcards';
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
export function fetchDecks() {
    return AsyncStorage.getItem(DECKS_STORAGE_KEY).then(results => {
        AsyncStorage.setItem(DECKS_STORAGE_KEY, JSON.stringify(information));
        return information;
    });
}