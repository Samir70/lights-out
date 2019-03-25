import React from 'react';

const PlaySpace = (props) => {
    return (
        <div>
            <div>{props.board.slice(0, 5)}</div>
            <div>{props.board.slice(5, 10)}</div>
            <div>{props.board.slice(10, 15)}</div>
            <div>{props.board.slice(15, 20)}</div>
            <div>{props.board.slice(20)}</div>
        </div>
    )
}

export default PlaySpace;