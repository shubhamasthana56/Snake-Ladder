import React, { useRef, useEffect, useContext} from 'react';
import { createBoard } from './boardGrids';
import './board.css';
import {GameStateContext} from '../../context/context'
const BoardLayout = () => {
    const startState = useContext(GameStateContext);
    const canvasRef = useRef(null);
    useEffect(() => {
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext("2d");
            createBoard(ctx)
        }

    }, [startState.gameState])
    return (
        <div>
            <canvas ref={canvasRef} id="board" width="1100" height="1100" className="board"></canvas>
        </div>


    )
}
export default BoardLayout