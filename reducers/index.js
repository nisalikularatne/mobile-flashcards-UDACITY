export const FETCH_DECKS = 'FETCH_DECKS';
function decks(state = {}, action) {
    switch (action.type) {
        case FETCH_DECKS:
            return {...state, ...action.decks};

        default:
            return state;
    }
}

export default decks;