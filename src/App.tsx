import React, { useState } from 'react';
import Navbar from './components/Navbar';
import GameField from './components/GameField';

const App: React.FC = () => {
  const [score, setScore] = useState(1);
  function resetScore() {
    setScore(score+2);
  }

  return (
    <>
      <Navbar score={score} />
      <div className="containet">
        <h1>Test</h1>
      </div>
      <GameField setScore={setScore} score={score} />
    </>
  );
};

export default App;
