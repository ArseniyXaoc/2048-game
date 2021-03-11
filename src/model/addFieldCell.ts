import { createCellsObj } from './createCells'
import { cellsType } from './moveCells'
import { uniqueId, random } from 'lodash';
//@ts-ignore
import { rotate } from '2d-array-rotation';

export function addFieldCell(cells: cellsType, newGame: Function, statistic: Function, score: number) {
    const newCoord = new Set();

    cells.forEach(cell => {
        newCoord.add(cell.x * 4 + cell.y)
    })

    if (newCoord.size === 16) {
        let posibleTurnHorizontal = 12
        let posibleTurnVertical = 12
        let cellMatrix: any = Array.from({ length: 4 }, () => new Array(4).fill(0));
        cells.forEach((cell) => { cellMatrix[cell.y][cell.x] = cell; });
        // @ts-ignore    
        cellMatrix.forEach(item => {
            //@ts-ignore 
            for (let i = 0; i < 3; i++) {
                if (item[i].value !== item[i + 1].value) {
                    posibleTurnHorizontal -= 1;
                }
            }
        });

        cellMatrix = rotate(cellMatrix, 90);
        // @ts-ignore  
        cellMatrix.forEach(item => {
            //@ts-ignore 
            for (let i = 0; i < 3; i++) {
                if (item[i].value !== item[i + 1].value) {
                    posibleTurnVertical -= 1;
                }
            }
        });
        if (!posibleTurnVertical && !posibleTurnHorizontal) {
            alert('you looze');
            statistic();
            newGame();
            return [];
        }
        return cells
    };

    let x;
    let y;
    let startSize = newCoord.size;
    do {
        x = random(0, 3);
        y = random(0, 3);
        const sum = x * 4 + y;
        newCoord.add(sum);
    } while (startSize === newCoord.size);
    const r = random(0, 9)


    return ([...cells, r <= 7 ? createCellsObj(x, y, 2, uniqueId(), 'IDLE') : createCellsObj(x, y, 4, uniqueId(), 'IDLE')]);
}