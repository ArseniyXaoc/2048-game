import React, { useState } from 'react';
import Navbar from './components/Navbar';
import GameField from './components/GameField';
import { Footer } from './components/footer'

const App: React.FC = () => {
  const [score, setScore] = useState(1);
  function resetScore() {
    setScore(score + 2);
  }

  return (
    <>
      <header><Navbar score={score} /></header>
      <main>        
        <div className="containet">
          <h1>Test</h1>
        </div>
        <GameField setScore={setScore} score={score} />
        
      </main>
      <Footer />
    </>
  );
};

export default App;
