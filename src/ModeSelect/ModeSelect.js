import React from 'react';

const ModeSelect = (props) => {
    return (
        <div> 
            <p>
                Current state: {props.onOffString} <br />
                Lights pressed: {props.buttonsPressed}
            </p>
            
            <p>Score: {props.score}</p>
        </div>
    );
}

export default ModeSelect;