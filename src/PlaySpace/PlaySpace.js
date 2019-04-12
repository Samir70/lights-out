import React from 'react';

const PlaySpace = (props) => {
    return (
        <div>
            <div>{props.board.slice(0, 5)}</div>
            <div>{props.board.slice(5, 10)}</div>
            <div>{props.board.slice(10, 15)}</div>
            <div>{props.board.slice(15, 20)}</div>
            <div>{props.board.slice(20)}</div>
            <p />
            <p>There are {props.score} lights left to put out.</p>
            <button onClick={props.resetBoard}>Reset to start position</button>
            <p />
        </div>
    )
}

export default PlaySpace;