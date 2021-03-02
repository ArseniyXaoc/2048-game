import React, { useState } from 'react';
import Navbar from './components/Navbar';
import { GameField } from './components/GameField';

const App: React.FC = () => {
  const [score, setScore] = useState(1);
  function resetScore() {
    setScore(0);
  }

  return (
    <>
      <Navbar score={score} />
      <div className="containet">
        <h1>Test</h1>
      </div>
      <GameField scoreReset={resetScore} />
    </>
  );
};

export default App;
