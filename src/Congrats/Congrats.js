import React from 'react';
import './Congrats.css';
import picture from "./Lights-Out.png";

const Congrats = (props) => {
    // check if props.solution has a key pressed twice
    return (
        <div>
            <p className="colourChange">Congratulations! You have turned off all the lights</p>
            <p>To do this you pressed {props.solution}</p>
            <p>Press a level button to select a new puzzle</p>
            <img className="congratSpin" src={picture} alt="Congratulations!" />
        </div>
    )
}

export default Congrats;