import React, { Fragment, useContext } from 'react'
import './game-wrapper.css'
import { GameStateContext } from '../../context/context'
const Wrapper = (props) => {
    const startGameContext = useContext(GameStateContext);
    return (
        <Fragment>
            <div className="container">
                <div>
                    <div>
                        <img src="assests/snl.png"></img>
                    </div>
                    {!startGameContext.gameState &&
                        <img className="datamotive-img" src="assests/datamotive.png"></img>
                    }

                </div>

                <div>
                    {props.children}
                </div>
            </div>

        </Fragment>
    )
}

export default Wrapper;