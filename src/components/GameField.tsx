import React, { useState, useEffect } from 'react';
import { Field } from './Field';
import { createStartingCells } from '../model';
import { moveCells } from '../model/moveCells';
import { DIRECTION } from './constants/AppConsatnts';
import { removeEnlargeCell } from '../model/removeEnlargeCell';
import { addFieldCell } from '../model/addFieldCell'

const keyToDirection: any = {
  ArrowLeft: DIRECTION.LEFT,
  ArrowRight: DIRECTION.RIGHT,
  ArrowUp: DIRECTION.UP,
  ArrowDown: DIRECTION.DOWN,
  KeyA: DIRECTION.LEFT,
  KeyD: DIRECTION.RIGHT,
  KeyW: DIRECTION.UP,
  KeyS: DIRECTION.DOWN,
}

const GameField: React.FC<{ setScore: Function, score: number }> = ({ setScore, score }) => {
  const [cells, setCells] = useState(createStartingCells());
  const [autoplay, setPlay] = useState('Start');
  const [right, setRight] = useState();
  const [down, setDown] = useState();
  const handleKeypress = (e: KeyboardEvent) => { upgradeCells(e, ''); };

  useEffect(() => {
    document.addEventListener('keydown', handleKeypress);
    return function cleanup() {
      document.removeEventListener('keydown', handleKeypress);
    };
  }, []);

  function autoPlay(state: string) { 
    if (state === 'Start') {
      //@ts-ignore
      setRight(right => setInterval(() => {
        upgradeCells(null, DIRECTION.RIGHT)
      }, 500))
      //@ts-ignore
      setDown(down => setInterval(() => {
        upgradeCells(null, DIRECTION.RIGHT)
      }, 500))
      setInterval(() => {
        upgradeCells(null, DIRECTION.DOWN)
      }, 500);
    } else {
      //@ts-ignore
      setPlay('Start');
    }
    setPlay('Stop');
  }

  function upgradeCells(event: KeyboardEvent | null, direction: string) {
    setCells(cells => event ? moveCells(cells, keyToDirection[event.code]) : moveCells(cells, direction));
    setCells(cells => removeEnlargeCell(cells));
    setCells(cells => addFieldCell(cells));
    //@ts-ignore
    setScore(score => score + 2);
  }

  function newGame() {
    setCells(cells => createStartingCells());
    setScore(0);
  }

  return (
    <div>
      <button className="waves-effect waves-light btn" onClick={newGame}>New Game</button>
      <button className="waves-effect waves-light btn" onClick={() => autoPlay(autoplay)}>Autoplay {autoplay}</button>
      <Field cells={cells} />
    </div>
  );
};

export default GameField;
