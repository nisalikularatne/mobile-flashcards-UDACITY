export const FETCH_DECKS = 'FETCH_DECKS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_DECK = 'ADD_DECK';
export function getDecks(decks) {
    return {
                type: FETCH_DECKS,
                decks,
            };
    }
export function addQuestion(params) {
        return {
                type:ADD_QUESTION,
                params,
            };
    }

export function addDeck(deck) {
    return{
        type: ADD_DECK,
        deck,
    }
}