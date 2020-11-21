const initState = {
    popularGames: [],
    newGames: [],
    upcomingGames: [],
};

const gamesReducer = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_GAMES':
            return {
                ...state,
                popularGames: action.payload.popular,
                newGames: action.payload.new,
                upcomingGames: action.payload.upcoming,
            };
        default:
            return { ...state };
    }
};

export default gamesReducer;
