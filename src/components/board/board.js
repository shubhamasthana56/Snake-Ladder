import React, { useContext, Fragment } from 'react';
import Token from '../game-token/game-token';
import BoardLayout from './board-layout';
import { GameStateContext } from '../../context/context'


const GameBoard = (props) => {
    const startState = useContext(GameStateContext)
    return (
        <Fragment>
            {startState.gameState &&
                <div>
                    <Token dieState={props.currentState}></Token>
                    <BoardLayout></BoardLayout>
                </div>
            }
        </Fragment>

    )
}

export default GameBoard;