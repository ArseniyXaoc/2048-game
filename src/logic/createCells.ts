import { uniqueId, random } from 'lodash'


export const createCellsObj = (x: number, y: number, value: number) => ({
    x,
    y,
    value,
    id: 'test'//uniqueId(),
})

const createStartingCells = () => {
    const cell1 = createCellsObj(random(0, 3), random(0, 3), 2);
    const cell2 = createCellsObj(random(0, 3), random(0, 3), 2);
    if (cell1.x === cell2.x && cell1.y === cell2.y) {
        cell2.y = cell2.y === 0 ? 1 : cell2.y - 1;
    }
    return [cell1, cell2];
}

export default createStartingCells;