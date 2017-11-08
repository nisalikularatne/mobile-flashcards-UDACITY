export const FETCH_DECKS = 'FETCH_DECKS';
export function getDecks(decks) {
    return {
                type: FETCH_DECKS,
                decks,
            };
    }