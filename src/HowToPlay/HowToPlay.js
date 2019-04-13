import React from 'react';
import './HowToPlay.css'
import mBefore from './Lights-Out-M-before.png';
import mAfter from './Lights-Out-M-after.png';

const HowToPlay = (props) => {
    return (
        <div className="growPage" >
          <p>Your aim is to turn off all the lights. Do this by pressing the light buttons. But... <br /> 
          When you click a light: that light switches (on or off) and 
          so do the lights above/below and to the left/right. <br /> 
          For instance:</p>
          <div>
             <img src={mBefore} alt="Before pressing M" /> 
             <p>If you now press M the lights will change to this:</p>
             <img src={mAfter} alt="After pressing M" />
          </div>
          <p>Not only was the M-light switched off, but the L and R-lights were also switched off. 
              And the H and N-lights were switched on. <br /> Notice that, if you press the M-light again, 
              then you just get back to where you started.
          </p>
          <button onClick = {props.clicked}>Hide how to play</button>
        </div>
    );
}

export default HowToPlay;