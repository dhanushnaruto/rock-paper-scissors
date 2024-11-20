import React from 'react';

function ScoreView(props) {
  const { score } = props;

  return (
    <div
      className="text-white flex flex-col sm:flex-row justify-between items-center p-4 border-4 border-white rounded-lg space-y-4 sm:space-y-0 sm:space-x-4"
      style={{ fontFamily: 'Bree Serif' }}
    >
      <div className="text-center sm:text-left">
        <h3 className="text-xl sm:text-2xl font-semibold">ROCK</h3>
        <h3 className="text-xl sm:text-2xl font-semibold">PAPER</h3>
        <h3 className="text-xl sm:text-2xl font-semibold">SCISSOR</h3>
      </div>
      <div className="bg-white text-black p-4 flex flex-col justify-center items-center rounded-lg w-full sm:w-auto">
        <h1 className="font-black text-2xl sm:text-3xl">Score</h1>
        <h1 className="text-xl sm:text-2xl">{score}</h1>
      </div>
    </div>
  );
}

export default ScoreView;
