import { uniqueId, random } from 'lodash';
import { CELLSTATE } from '../components/constants/AppConsatnts'

export const createCellsObj = (x: number, y: number, value: number, id: any, cellState:string) => ({
  x,
  y,
  value,
  id,
  cellState,
});

export const createCell = () => createCellsObj(random(0, 3), random(0, 3), 2, uniqueId(), CELLSTATE.IDLE);

export const createStartingCells = () => {
  const cell1 = createCell();
  const cell2 = createCell();
  if (cell1.x === cell2.x && cell1.y === cell2.y) {
    cell2.y = cell2.y === 0 ? 1 : cell2.y - 1;
  }
  return [cell1, cell2];
};



