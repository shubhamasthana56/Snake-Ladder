import React, { useRef, useEffect} from 'react';
import { createBoard } from './boardGrids';
import './board.css'
const BoardLayout = () => {
    const canvasRef = useRef(null);
    useEffect(() => {
        if (canvasRef.current) {
            const ctx = canvasRef.current.getContext("2d");
            createBoard(ctx)
        }

    }, [])
    return (
        <div>
            <canvas ref={canvasRef} id="board" width="1100" height="1100" className="board"></canvas>
        </div>


    )
}
export default BoardLayout