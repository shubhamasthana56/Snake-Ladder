import React, { useState, useContext } from 'react';
import './player.css'
import Dice from '../dice/dice';
import { GameStateContext } from '../../context/context';
const PlayerDetails = (props) => {
    const startGame = useContext(GameStateContext);
    const [playerName, setPlayerName] = useState('');
    const setNameHandler = (e) => {
        setPlayerName(e.target.value)
    }
    return (
        <div className="player-container">
            { !startGame.gameState &&
                <div>
                    <label className="player-label">Enter Player Name</label>
                    <input onChange={setNameHandler} type="text">
                    </input>
                    <button onClick={() => { props.gameHandler(true); props.dieStateHandler(0) }} className={`${playerName.length > 0 ? "start-button" : 'disabled'}`}>Start Game</button>
                </div>
            }
            {
                startGame.gameState &&
                <div>
                    <div className="display-name">{playerName}</div>
                    <Dice dieStateHandle={props.dieStateHandler}></Dice>
                </div>

            }

        </div>)
}
export default PlayerDetails;