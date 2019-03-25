import React, { Component } from 'react';
import './App.css';
import PlaySpace from './PlaySpace/PlaySpace';
import ModeSelect from './ModeSelect/ModeSelect';
import Challenges from './Challenges/Challenges';

class App extends Component {
  state = {
    boardLights: "0000000100011100010000000",
    numOfLights: 5,
    keys: "ABCDEFGHIJKLMNOPQRSTUVWXY"
  }
  
  boardChangeHandler = (lightIndex) => {
    const toggleLight = (light) => light === "0" ? "1" : "0";
    let board = this.state.boardLights.split("");
    board[lightIndex] = toggleLight(board[lightIndex]);
    //board[lightIndex] === "0" ? board[lightIndex] = "1" : board[lightIndex] = "0";
    if (lightIndex > 4) { board[lightIndex-5] = toggleLight(board[lightIndex-5])  }
    if (lightIndex < 20) { board[lightIndex+5] = toggleLight(board[lightIndex+5])  }
    if (lightIndex % 5 !== 4) { board[lightIndex+1] = toggleLight(board[lightIndex+1])  }
    if (lightIndex % 5 !== 0) { board[lightIndex-1] = toggleLight(board[lightIndex-1])  }

    let count = board.map(x => parseInt(x)).reduce((a, b) => a+b);

    this.setState({ boardLights: board.join(""), numOfLights: count });
  }

  newBoard = (level) => {
    var n=0;
    switch (level) {
      case "easy" : {
        n=Math.floor(Math.random()*Challenges.easy.length);
        this.setState({ boardLights: Challenges.easy[n] })} break;
      case "medium" : { 
        n = Math.floor(Math.random()*Challenges.medium.length)
        this.setState({ boardLights: Challenges.medium[n] }) } break;
      default: {}
    }
  }

  render() {
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
        <ModeSelect 
          onOffString={this.state.boardLights} 
          score={this.state.numOfLights}
          changeEasy={() => this.newBoard("easy")}
          changeMed={() => this.newBoard("medium")}
          changeHard={() => this.newBoard("hard")} />
        <PlaySpace board={boardList} />
      </div>
    );
  }
}

export default App;
