import { uniqueId, random } from 'lodash';

export const createCellsObj = (x: number, y: number, value: number, id: string | number) => ({
  x,
  y,
  value,
  id, // uniqueId(),
});

const createStartingCells = () => {
  const cell1 = createCellsObj(random(0, 3), random(0, 3), 2, uniqueId());
  const cell2 = createCellsObj(random(0, 3), random(0, 3), 2, uniqueId());
  if (cell1.x === cell2.x && cell1.y === cell2.y) {
    cell2.y = cell2.y === 0 ? 1 : cell2.y - 1;
  }
  return [cell1, cell2];
};

export default createStartingCells;
