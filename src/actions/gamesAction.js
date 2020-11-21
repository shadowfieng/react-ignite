import axios from 'axios';
import { newGamesURL, popularGamesURL, upcomingGamesURL } from '../api';

export const loadGames = () => async (dispatch) => {
    const popularGamesData = await axios.get(popularGamesURL());
    const newGamesData = await axios.get(newGamesURL());
    const upcomingGamesData = await axios.get(upcomingGamesURL());

    if (upcomingGamesData) {
        dispatch({
            type: 'FETCH_GAMES',
            payload: {
                popular: popularGamesData.data.results,
                new: newGamesData.data.results,
                upcoming: upcomingGamesData.data.results,
            },
        });
    }
};
