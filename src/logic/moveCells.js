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
        cellMatrix[cell.y][cell.x] = cell;
    })

    for (let y = 0; y < 4; y++) {
        for (let x = 0; x < 4; x++) {
            if (cellMatrix[y][x] !== 0) {
                moveMatrix(cellMatrix, x, y);
            }
        }

    }

    function moveMatrix(matrix, x, y) {
        let prevCell = y - 1;
        console.log(matrix);
        while (prevCell >= 0) {
            if(!matrix[prevCell][x]){
                matrix[prevCell][x] = matrix[y][x];
                matrix[y][x] = 0;                
                y -= 1;}
                prevCell -= 1;
        }
        console.log(matrix);
    }
    return cells;
};
export default moveCells