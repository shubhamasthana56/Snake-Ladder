import React, { useRef } from 'react'
import './dice.css'
import Button from '../button/button';
import { rollDice } from './roll-dice';
const Dice = (props) => {
    const listRef = useRef(null)
    const renderDiceIndices = (indiceCount) => {
        const indiceValue = []
        for (let j = indiceCount; j > 0; j--) {
            indiceValue.push(<span key={`IV${j}`} className="dot"></span>)
        }
        return indiceValue;
    }
    const renderDiceList = () => {
        const diceList = []
        for (let i = 1; i <= 6; i++) {
            diceList.push(
                <li ref={listRef} key={`DL-${i}`} className="dice-item" data-side={i}>
                    {renderDiceIndices(i)}
                </li>
            )

        }
        return diceList
    }
    return (
        <div className="dice">
            <ol ref={listRef} className="dice-list even-roll" data-roll="1">
                {renderDiceList()}
            </ol>
            <Button buttonText='Roll Dice' buttonHandler={() => {
                rollDice(listRef, props.dieStateHandle)
            }}></Button>
        </div>
    )
}
export default Dice;