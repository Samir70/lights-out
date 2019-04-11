import React, { Component } from 'react';
import './App.css';
import PlaySpace from './PlaySpace/PlaySpace';
import Congrats from './Congrats/Congrats';
import ModeSelect from './ModeSelect/ModeSelect';
import Challenges from './Challenges/Challenges';

class App extends Component {
  state = {
    boardLights: "0000000100011100010000000",
    startPos: "0000000100011100010000000",
    lightsPressed: "",
    numOfLights: 5,
    keys: "ABCDEFGHIJKLMNOPQRSTUVWXY"
  }
  
  resetToStart = () => {
    this.setState({
      boardLights: this.state.startPos, 
      lightsPressed: "",
      numOfLights: this.countLights(this.state.startPos) })
  }

  // countLights takes a string of binary indicators for the board, and counts the ones
  countLights = (board) => {
    return board.split("").map(x => parseInt(x)).reduce((a, b) => a+b);
  }

  // this handler will update the board if one of the lights is clicked
  boardChangeHandler = (lightIndex) => {
    const toggleLight = (light) => light === "0" ? "1" : "0";
    let board = this.state.boardLights.split("");
    board[lightIndex] = toggleLight(board[lightIndex]);
    if (lightIndex > 4) { board[lightIndex-5] = toggleLight(board[lightIndex-5])  }
    if (lightIndex < 20) { board[lightIndex+5] = toggleLight(board[lightIndex+5])  }
    if (lightIndex % 5 !== 4) { board[lightIndex+1] = toggleLight(board[lightIndex+1])  }
    if (lightIndex % 5 !== 0) { board[lightIndex-1] = toggleLight(board[lightIndex-1])  }

    this.setState({ 
      boardLights: board.join(""), 
      lightsPressed: this.state.lightsPressed + this.state.keys[lightIndex],
      numOfLights: this.countLights(board.join("")) });
  }

  // selects a new start position, depending on the level clicked.
  newBoard = (level) => {
    var n=Math.floor(Math.random()*Challenges[level].length);
    this.setState({ 
      boardLights: Challenges[level][n], 
      startPos: Challenges[level][n], 
      lightsPressed: "",
      numOfLights: this.countLights(Challenges[level][n]) });
  }

  render() {
    // boardlist turns the binary on/off string for the lights into 
    //    a list of buttons, class depends on on/off of relevant bit
    // Keys give buttons a name (A-Z) 
    //     which is intended to be used in later version for checking optimum solution
    let boardList = this.state.boardLights.split("").map((cell, index) => {
      return cell === "0" ? 
        <button 
          key={this.state.keys[index]} 
          className="lightOff" 
          onClick={() => this.boardChangeHandler(index)} >{this.state.keys[index]}</button> : 
        <button 
          key={this.state.keys[index]} 
          className="lightOn"  
          onClick={() => this.boardChangeHandler(index)} >{this.state.keys[index]}</button>
    });

    return (
      <div className="App">
        <h1>Lights-Out</h1>
        <ModeSelect 
          onOffString={this.state.boardLights} 
          buttonsPressed={this.state.lightsPressed}
          score={this.state.numOfLights} />

        {this.state.numOfLights === 0 ? 
            <Congrats 
              solution={this.state.lightsPressed}              
              changeEasy={() => this.newBoard("easy")}
              changeMed={() => this.newBoard("medium")}
              changeHard={() => this.newBoard("hard")} /> : 
            <PlaySpace board={boardList} resetBoard={this.resetToStart} /> }
      </div>
    );
  }
}

export default App;
