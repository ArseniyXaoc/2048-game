import {
    cloneDeep
} from 'lodash'
import {
    rotate
} from '2d-array-rotation'

const moveCells = (InputCells, direction) => {
    const cells = cloneDeep(InputCells);
    let cellMatrix = Array.from({
        length: 4
    }, () => new Array(4).fill(0));

    cells.forEach((cell) => {
        cellMatrix[cell.x][cell.y] = cell;
    })
    console.log(cellMatrix);
    return cells;
};
export default moveCells