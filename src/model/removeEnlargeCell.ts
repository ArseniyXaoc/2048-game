import { CELLSTATE } from './../components/constants/AppConsatnts';
import { cellsType } from './moveCells';
export function removeEnlargeCell(cells: cellsType) {
    const newCell = cells.filter(cell => cell.cellState !== CELLSTATE.REMOVE)
        .map(cell => {
        if(cell.cellState === CELLSTATE.ENLARGE){
            cell.value *= 2;
            console.log(cell);
        }
        cell.cellState = CELLSTATE.IDLE;
        return cell;
    })
    return newCell;
}