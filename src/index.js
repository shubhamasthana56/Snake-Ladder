import React, { useState } from 'react';
import ReactDom from 'react-dom';
import GameBoard from './components/board/board';
import Wrapper from './components/game-wrapper/game-wrapper'
import PlayerDetails from './components/player-details/player'
import { GameStateContext } from './context/context'

const App = () => {
    const [gameState, setGameState] = useState({ gameState: false });
    const [dieState, setDieState] = useState({dieValue: 0});
    const dieStateHandler = (dieNumber) => {
        setDieState(() => {
            return {dieValue: dieNumber}
        })
    }
    const startGameHandler = () => {
        setGameState(() => {
            return {
                gameState: true
            }
        })
    }
    return (
        <GameStateContext.Provider value={gameState}>
            <Wrapper>
                <GameBoard currentState={dieState}></GameBoard>
                <PlayerDetails dieStateHandler={dieStateHandler} gameHandler={startGameHandler}></PlayerDetails>
            </Wrapper>
        </GameStateContext.Provider>
    )
}

ReactDom.render(<App />,
    document.getElementById('main')
)