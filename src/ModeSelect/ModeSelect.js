import React from 'react';

const ModeSelect = (props) => {
    return (
        <div> 
            <h1>Control Panel</h1>
            <div>
                <button onClick={() => props.changeEasy()}>Another (Easy)</button>
                <button onClick={() => props.changeMed()}>Another (Medium)</button>
                <button onClick={() => props.changeHard()}>Another (Hard)</button>
            </div>
            <p>
                Current state: {props.onOffString} <br />
                Lights pressed: {props.buttonsPressed}
            </p>
            <button onClick={props.resetBoard}>Reset to start position</button>
            <p>Score: {props.score}</p>
        </div>
    );
}

export default ModeSelect;