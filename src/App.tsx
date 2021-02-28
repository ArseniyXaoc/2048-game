import React from 'react';
import Navbar from './components/Navbar'
import {GameField} from './components/GameField'

const App: React.FC = () => {
  return (
  <>
    <Navbar />
    <div className = "containet">
      <h1>Test</h1>
    </div>
    <GameField />
  </>
  );
}

export default App;
