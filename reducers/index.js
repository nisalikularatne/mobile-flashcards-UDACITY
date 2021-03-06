export const FETCH_DECKS = 'FETCH_DECKS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_DECK = 'ADD_DECK';
function decks(state = {}, action) {
    switch (action.type) {
        case FETCH_DECKS:
            return {...state, ...action.decks};
        case ADD_QUESTION:
            const {title, questions, question, answer} = action.params;
            const newQuestions = JSON.parse(JSON.stringify(questions)).concat([ { question, answer } ]);

            return {
                ...state,
                [title]: {...state[title], questions: newQuestions},
            };
        case ADD_DECK:
            return {...state, ...action.deck};

        default:
            return state;
    }
}

export default decks;