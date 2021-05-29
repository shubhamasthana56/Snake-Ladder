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
                setCordinateState(16)
                return 16
            case 26:
                setCordinateState(55)
                return 55;
            case 47:
                setCordinateState(90)
                return 90
            case 60:
                setCordinateState(33)
                return 33
            case 76:
                setCordinateState(34)
                return 34
            case 83:
                setCordinateState(10)
                return 10
            case 93:
                setCordinateState(52)
                return 52
            default:
                return dieNumber
        }
    }
    const tokenRef = useRef(null)
    useEffect(() => {
        ctx = tokenRef.current.getContext("2d")
        ctx.fillRect(currentX, currentY, 50, 50)
        if(cordinateState)
        moveToken(cordinateState)
    }, [cordinateState]);

    useEffect(()=> {
        console.log(cordinateState, parseInt(props.dieState.dieValue))
        clearToken(cordinateState);
        setCordinateState( cordinateState + parseInt(props.dieState.dieValue))
    }, [props.dieState])

    return <div>
        <canvas ref={tokenRef} height="1100" width="1100" className="token"></canvas>
    </div>
}
export default Token;