import React, { useRef, useEffect, useState} from 'react'
import './game-token.css';
import { cordinates } from '../board/boardGrids';
let ctx;
const Token = (props) => {
    
    const [cordinateState, setCordinateState] = useState(0)
    let currentX= 0;
    let currentY = 900;

    const clearToken = (dieNumber)=> {
        const dieValue = getDieValue(dieNumber)
        if(dieNumber) {
            const { xAxis, yAxis } = cordinates[dieValue]
            ctx.clearRect(xAxis, yAxis, 50, 50);
        }
        
    }
    
    const moveToken = (dieNumber) => {
        const dieValue = getDieValue(dieNumber)
        const { xAxis, yAxis } = cordinates[dieValue]
        ctx.clearRect(currentX, currentY, 50, 50);
        currentX = xAxis;
        currentY = yAxis;
        
        ctx.fillRect(currentX, currentY, 50, 50)
    }
    const getDieValue = (dieNumber) => {
        switch (dieNumber) {
            case 4:
                return 16
            case 26:
                return 55;
            case 47:
                return 90
            case 60:
                return 33
            case 76:
                return 34
            case 83:
                return 10
            case 93:
                return 52
            default:
                return dieNumber
        }
    }
    const tokenRef = useRef(null)
    useEffect(() => {
        ctx = tokenRef.current.getContext("2d")
        ctx.fillRect(currentX, currentY, 50, 50)
        if(parseInt(props.dieState.dieValue))
        moveToken(parseInt(props.dieState.dieValue))
    }, [cordinateState]);

    useEffect(()=> {
        clearToken(cordinateState);
        setCordinateState(parseInt(props.dieState.dieValue))
    }, [props.dieState])

    return <div>
        <canvas ref={tokenRef} height="1100" width="1100" className="token"></canvas>
    </div>
}
export default Token;