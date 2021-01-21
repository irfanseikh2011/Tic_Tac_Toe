import './App.css';
import Board from './components/Board';
import "./styles/root.scss";
import React, {useState} from 'react';
import {calculateWinner} from './helper';

const App = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(board);

  const message = winner ? `Winner is ${winner}` : `Next Player is ${isXNext ? 'X' : 'O'}`;

  const handleSquareClick = position => {
    if (board[position] || winner) {
      return;
    }

    setBoard(prev => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXNext ? 'X' : 'O';
        }

        return square;
      });
    });

    setIsXNext(prev => !prev);
  };


  const WinnerHighlight = () => {
    if(winner)
    {
    
    }
  }

  return (
    <div className="app">
      <h1>Tic Tac Toe Game</h1>
      <h2>{message}</h2>
      <Board board={board} handleSquareClick={handleSquareClick}/>
    </div>
  );
}

export default App;
