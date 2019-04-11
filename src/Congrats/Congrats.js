import React from 'react';
import './Congrats.css';
import picture from "./Lights-Out.png";

const Congrats = (props) => {
    // check if props.solution has a key pressed twice
    // decide on solution message depending on if a key was pressed twice
    var quickSol = props.solution.split("").sort().filter((x, i, a) => x !== a[i+1] && x!==a[i-1] );
    var solutionMessage = "No special solution message";
    var solverType = "You're no kind of solver."
    // An array of solver types would be useful so the congrats message can change every time.
    if (quickSol.length < props.solution.length) {
        solutionMessage = "But there was a quicker solution. There's no need to press a button twice.";
        solverType = "You're like a monkey at a keyboard who might write Shakespeare one day!"
    } else {
        solutionMessage = "Well done! You pressed each of these lights once: "+quickSol
        solverType = "That was pure genius!"
    }

    return (
        <div>
            <p className="colourChange">Congratulations! You have turned off all the lights</p>
            <p>{solutionMessage}</p>
            <p>{solverType}</p>
            <p>Press a level button to select a new puzzle</p>
            <img className="congratSpin" src={picture} alt="Congratulations!" />
            <div>
                <button onClick={() => props.changeEasy()}>Another (Easy)</button>
                <button onClick={() => props.changeMed()}>Another (Medium)</button>
                <button onClick={() => props.changeHard()}>Another (Hard)</button>
            </div>
            <p />
        </div>
    )
}

export default Congrats;