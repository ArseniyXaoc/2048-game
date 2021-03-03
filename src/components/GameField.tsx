import React, { useState, useEffect } from 'react';
import { Field } from './Field';
import { createStartingCells } from '../model';
import { moveCells } from '../model/moveCells';
import { DIRECTION } from './constants/AppConsatnts';
import { removeEnlargeCell } from '../model/removeEnlargeCell';
import { addFieldCell } from '../model/addFieldCell'
import { cellsType } from '../model/moveCells'
import useSound from 'use-sound';

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
  //@ts-ignore
  const returnObj = JSON.parse(localStorage.getItem("myCells"));
  //@ts-ignore
  const returnScore = JSON.parse(localStorage.getItem("myScore"));
  const [cells, setCells] = useState<cellsType>(createStartingCells());
  if(returnObj){
   console.log(returnObj);
    useEffect(() =>{
    setCells(cells =>[...returnObj]);
    setScore(returnScore);
  }, [])}
  
  
  const [autoplay, setPlay] = useState('Start');
  const [interval, setInt] = useState();
  const handleKeypress = (e: KeyboardEvent) => { upgradeCells(e, ''); };

  useEffect(() => {
    document.addEventListener('keydown', handleKeypress);
    return function cleanup() {
      document.removeEventListener('keydown', handleKeypress);
    };
  }, []);

  function autoPlay(state: string) {
    let right;
    let down;
    if (state === 'Start') {
      right = setInterval(() => {
        upgradeCells(null, DIRECTION.RIGHT)
      }, 500);
      down = setInterval(() => {
        upgradeCells(null, DIRECTION.DOWN)
      }, 500);
    } else {
      clearInterval(right);
      clearInterval(down);
    }

  }

  function upgradeCells(event: KeyboardEvent | null, direction: string) {
    setCells(cells => event ? moveCells(cells, keyToDirection[event.code]) : moveCells(cells, direction));
    setCells(cells => removeEnlargeCell(cells));
    setCells(cells => addFieldCell(cells));
    //@ts-ignore
    setScore(score => score + 2);
  }

  useEffect(() => {
    saveGame(cells, score);
  })

  function saveGame(cells: cellsType, score: number){
    let serialObjCell = JSON.stringify(cells);
    localStorage.setItem("myCells", serialObjCell);
    let serialObjScore = JSON.stringify(score);
    localStorage.setItem("myScore", serialObjScore);
    
    console.log(returnObj);
  }

  function newGame() {
    setCells(cells => createStartingCells());
    setScore(0);
  }

  return (
    <div>
      <button className="waves-effect waves-light btn" onClick={newGame}>New Game</button>
      <button className="waves-effect waves-light btn" onClick={() => {
        let x;
        if (autoplay === 'Start') {
          setPlay('Stop')
          //@ts-ignore
        } else {
          setPlay('Stop')
          console.log(x);
          clearInterval();
        }
        autoPlay(autoplay);

      }}>Autoplay {autoplay}</button>
      <Field cells={cells} />
    </div>
  );
};

export default GameField;
