import React, { useState } from 'react';
import ScoreView from './ScoreView';
import '../App.css'; // Add custom animations here

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
];



function Home() {
  const [isShow, setShow] = useState(false);
  const [gameResult, setGameResult] = useState('');
  const [playersChoice, setPlayersChoice] = useState([]);
  const [score, setScore] = useState(0);

  const checkResult = (choice1, choice2) => {
    if (choice1.id === 'ROCK') {
      switch (choice2.id) {
        case 'PAPER':
          return 'YOU LOSE';
        case 'SCISSORS':
          return 'YOU WON';
        default:
          return 'IT IS A DRAW';
      }
    } else if (choice1.id === 'PAPER') {
      switch (choice2.id) {
        case 'SCISSORS':
          return 'YOU LOSE';
        case 'ROCK':
          return 'YOU WON';
        default:
          return 'IT IS A DRAW';
      }
    } else {
      switch (choice2.id) {
        case 'ROCK':
          return 'YOU LOSE';
        case 'PAPER':
          return 'YOU WON';
        default:
          return 'IT IS A DRAW';
      }
    }
  };

  const resultView = () => (
    <div className="text-white flex flex-col justify-center items-center h-5/6 px-4 mt-3">
      <div className="flex flex-col md:flex-row justify-between w-full md:w-3/6">
        <div className="flex flex-col items-center">
          <h1>YOU</h1>
          <img src={playersChoice[0].imageUrl} alt="" className="h-24 md:h-36 rolling-image" />
        </div>
        <div className="flex flex-col items-center mt-4 md:mt-0">
          <h1>OPPONENT</h1>
          <img src={playersChoice[1].imageUrl} alt="" className="h-24 md:h-36 rolling-image" />
        </div>
      </div>
      <div className="mt-6 flex flex-col justify-center items-center">
        <h1 className="mb-4 text-lg md:text-xl">{gameResult}</h1>
        <button
          className="border-solid border-2 rounded-lg p-3 text-sm md:text-base"
          onClick={() => setShow(false)}
        >
          Play Again
        </button>
      </div>
    </div>
  );

  const showResult = (id) => {
    const choice1 = choicesList.filter((each) => each.id === id);
    const choice2 = choicesList[Math.floor(Math.random() * 3)];
    const result = checkResult(choice1[0], choice2);
    const newScore = result === 'YOU WON' ? score + 1 : result === 'YOU LOSE' ? score - 1 : score;

    setScore(newScore);
    setShow(true);
    setGameResult(result);
    setPlayersChoice([choice1[0], choice2]);
  };

  return (
    <div className="bg-cyan-900 min-h-screen flex flex-col items-center">
      <div className="w-full sm:w-3/4 mt-8 p-4" style={{ height: '70vh' }}>
        <ScoreView score={score} />
        {isShow ? (
          resultView()
        ) : (
          <div className="flex flex-col justify-center items-center h-full">
            <div className="flex justify-around items-center w-full sm:w-3/6 md:w-5/6">
              <img
                src={choicesList[0].imageUrl}
                onClick={() => showResult(choicesList[0].id)}
                alt="img"
                className="h-24 md:h-36 cursor-pointer circle"
              />
              <img
                src={choicesList[1].imageUrl}
                onClick={() => showResult(choicesList[1].id)}
                alt="img"
                className="h-24 md:h-36 cursor-pointer circle"
              />
            </div>
            <div className="mt-4">
              <img
                src={choicesList[2].imageUrl}
                onClick={() => showResult(choicesList[2].id)}
                alt="img"
                className="h-24 md:h-36 cursor-pointer circle"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
