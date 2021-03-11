import { CELLSTATE } from './../components/constants/AppConsatnts';
import { cellsType } from './moveCells';

export function removeEnlargeCell(cells: cellsType, score: any, setScore: any) {
    const newCell = cells.filter(cell => cell.cellState !== CELLSTATE.REMOVE)
        .map(cell => {
        if(cell.cellState === CELLSTATE.ENLARGE){
            cell.value *= 2;
            //@ts-ignore
            setScore(score => score + 2);
            if(cell.value === 2048){
                alert('You Win!');
            }
        }
        cell.cellState = CELLSTATE.IDLE;
        return cell;
    })
    return newCell;
}
