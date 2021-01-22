import React from 'react';

const Square = ({ value, onClick, isWinningSquare }) => {
  return (
    <button
      type="button"
      className="square"
      onClick={onClick}
      style={{ fontWeight: isWinningSquare ? 'bold' : 'normal', color: isWinningSquare ? '#12E177':'#fffff',transition: isWinningSquare ? 'all 0.5s ease':''}}
    >
      {value}
    </button>
  );
};

export default Square;
