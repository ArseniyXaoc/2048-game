import { createCellsObj } from './createCells'
import { cellsType } from './moveCells'
import { uniqueId, random } from 'lodash';

export function addFieldCell(cells:cellsType) {
    const newCoord = new Set();

    cells.forEach(cell => {
        newCoord.add(cell.x * 4 + cell.y)
    })

    if(newCoord.size === 16) return cells;

    let x;
    let y;
    let startSize = newCoord.size;
    do{
        x = random(0, 3);
        y = random(0, 3);
        const sum = x * 4 + y;
        newCoord.add(sum);
    } while (startSize === newCoord.size);

    return ([...cells,createCellsObj(x, y, 2, uniqueId(), 'IDLE')]);
}