import React from 'react';
import './Congrats.css';
import picture from "./Lights-Out.png";

const Congrats = (props) => {
    // check if props.solution has a key pressed twice
    // decide on solution message depending on if a key was pressed twice
    var quickSol = props.solution.split("").sort().filter((x, i, a) => x != a[i+1] && x!=a[i-1] );
    var solutionMessage = "No special solution message";
    if (quickSol.length < props.solution.length) {
        solutionMessage = "There was a quicker solution. There's no need to press a button twice."
    } else {solutionMessage = "Well done! You pressed each of these lights: "+quickSol+" once"}

    return (
        <div>
            <p className="colourChange">Congratulations! You have turned off all the lights</p>
            <p>{solutionMessage}</p>
            <p>Press a level button to select a new puzzle</p>
            <img className="congratSpin" src={picture} alt="Congratulations!" />
        </div>
    )
}

export default Congrats;