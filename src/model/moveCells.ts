import {
  cloneDeep,
} from 'lodash';
//@ts-ignore
import { rotate } from '2d-array-rotation';
import { CELLSTATE } from '../components/constants/AppConsatnts'


export type cellsType = {
  x: number, 
  y: number, 
  value: number, 
  id: string | number,
  cellState: string,
}[];

const moveCells = (InputCells: cellsType, direction: string):cellsType => {
 

  const cells = cloneDeep(InputCells);
  let cellMatrix: any = Array.from({ length: 4 }, () => new Array(4).fill(0));
  cells.forEach((cell) => { cellMatrix[cell.y][cell.x] = cell; });
  let rotated = false;

  const rotateTo = (rotattion: string, matrix: cellsType) => {
    switch (rotattion) {
      case 'DOWN':
        matrix = rotate(matrix, 180);
        break;
      case 'RIGHT':
        matrix = rotated ? rotate(matrix, 90) : rotate(matrix, -90);
        break;
      case 'LEFT':
        matrix = rotated ? rotate(matrix, -90) : rotate(matrix, 90);
        break;
      default:
        break;
    }
    rotated = true;
    return matrix;
  };

  function moveMatrix(matrix: any, x: number , y: number) {
    let prevCell = y - 1;
    while (prevCell >= 0) {
      if (!matrix[prevCell][x]) {
        matrix[prevCell][x] = matrix[y][x];
        matrix[y][x].cellState = CELLSTATE.MOVING;
        matrix[y][x] = 0;
        y = prevCell;
      } else if (matrix[prevCell][x].value === matrix[y][x].value && 
        (matrix[prevCell][x].cellState === CELLSTATE.IDLE || 
          matrix[prevCell][x].cellState === CELLSTATE.MOVING)){
        matrix[prevCell][x].cellState = CELLSTATE.REMOVE;
        matrix[y][x].cellState = CELLSTATE.ENLARGE;
        matrix[prevCell][x] = matrix[y][x];
        matrix[y][x] = 0;
        y = prevCell;
      }
      else break;
      prevCell -= 1;
    }
  }

  function cellSetCurrentValue(matrix: any) {
    const changeMatrix = matrix;
    for (let y = 0; y < 4; y += 1) {
      for (let x = 0; x < 4; x += 1) {
        if (matrix[y][x] !== 0) {
          changeMatrix[y][x].y = y;
          changeMatrix[y][x].x = x;
        }
      }
    }
  }

  cellMatrix = direction === 'UP' ? cellMatrix : rotateTo(direction, cellMatrix);
  for (let y = 0; y < 4; y += 1) {
    for (let x = 0; x < 4; x += 1) {
      if (cellMatrix[y][x] !== 0) {
        moveMatrix(cellMatrix, x, y);
      }
    }
  }

  cellMatrix = direction === 'UP' ? cellMatrix : rotateTo(direction, cellMatrix);
  cellSetCurrentValue(cellMatrix);

  return cells;
};
export {moveCells};
