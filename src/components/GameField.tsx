import React, { useState, useEffect, useRef } from 'react';
import { Field } from './Field';
import { createStartingCells } from '../model';
import { moveCells } from '../model/moveCells';
import { DIRECTION } from './constants/AppConsatnts';
import { removeEnlargeCell } from '../model/removeEnlargeCell';
import { addFieldCell } from '../model/addFieldCell';
import { cellsType } from '../model/moveCells';
import { useInterval } from '../model/hooks/useInterval';
 //@ts-ignore
import url1 from '../assets/sound/267950__anagar__whoosh.wav';

enum Arrows {
  ArrowLeft = 'ArrowLeft',
  ArrowRight = 'ArrowRight',
  ArrowUp = 'ArrowUp',
  ArrowDown = 'ArrowDown',
  KeyA = 'KeyA',
  KeyD = 'KeyD',
  KeyW = 'KeyW',
  KeyS = 'KeyS',
}

type KeyToDirection = {
 [key in Arrows]: DIRECTION
}
const keyToDirection: KeyToDirection = {
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
  const [statistic, setStatistic] = useState<[]>([]);
  //@ts-ignore
  const returnObj = JSON.parse(localStorage.getItem("myCells"));
  //@ts-ignore
  const returnScore = JSON.parse(localStorage.getItem("myScore"));
  const [cells, setCells] = useState<cellsType>(createStartingCells());
  if (returnObj) {
    useEffect(() => {
      setCells(cells => [...returnObj]);
      setScore(returnScore);
    }, [])
  }


  const [isRunning, setPlay] = useState(false);
  const [interval, setInt] = useState();
  const handleKeypress = (e: KeyboardEvent) => { upgradeCells(e, ''); };

  useEffect(() => {
    document.addEventListener('keydown', handleKeypress);
    return function cleanup() {
      document.removeEventListener('keydown', handleKeypress);
    };
  }, []);

  function autoPlay() {
       upgradeCells(null, DIRECTION.RIGHT);
       upgradeCells(null, DIRECTION.DOWN);
       upgradeCells(null, DIRECTION.DOWN);
  }

  

  function upgradeCells(event: KeyboardEvent | null, direction: string) {
    setCells(cells => {
      //@ts-ignore
      let newCell = event ? moveCells(cells, keyToDirection[event.code]) : moveCells(cells, direction);
      newCell = removeEnlargeCell(newCell, score, setScore);
      return newCell;
    });
    setCells(cells => addFieldCell(cells, newGame, useStatistic, score));
  } 

  function useStatistic (){
    const date = new Date;
    //@ts-ignore
    setStatistic(statistic => statistic.push({date,score}));
    let serialObjStat = JSON.stringify(statistic);
    localStorage.setItem("myStat", serialObjStat);
  }

  useEffect(() => {
    saveGame(cells, score);
    function saveGame(cells: cellsType, score: number) {
      let serialObjCell = JSON.stringify(cells);
      localStorage.setItem("myCells", serialObjCell);
      let serialObjScore = JSON.stringify(score);
      localStorage.setItem("myScore", serialObjScore);
    }
  })

  function newGame() {
    setPlay(false);
    setCells(cells => createStartingCells());   
    const x = JSON.stringify(cells);;
    localStorage.setItem("myCells", x); 
    setScore(0);
  }

  const delay = 500;
  useInterval(() => {
    autoPlay();
  }, isRunning ? delay : null);

  return (
    <div>
      <button className="waves-effect waves-light btn" onClick={ newGame }>New Game</button>
      <button className="waves-effect waves-light btn" onClick={() => isRunning ? setPlay(false) : setPlay(true)}>Autoplay {isRunning ? 'Stop' : 'Start' }</button>
      <Field cells={cells} />
    </div>
  );
};

export default GameField;
