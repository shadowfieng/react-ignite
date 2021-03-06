import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadGames } from '../actions/gamesAction';

import styled from 'styled-components';
import { motion } from 'framer-motion';
import Game from '../components/Game';

const Home = () => {
    const dispatch = useDispatch();

    const { popularGames, newGames, upcomingGames } = useSelector(
        (state) => state.games
    );

    useEffect(() => {
        dispatch(loadGames());
    }, [dispatch]);

    return (
        <GameList>
            <h2>Upcoming games</h2>
            <Games>
                {upcomingGames.map((game) => (
                    <Game key={game.id} game={game} />
                ))}
            </Games>
        </GameList>
    );
};

const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h2 {
        padding: 5rem 0rem;
    }
`;

const Games = styled(motion.div)`
    min-height: 80vh;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 3rem;
    grid-row-gap: 5rem;
`;

export default Home;
