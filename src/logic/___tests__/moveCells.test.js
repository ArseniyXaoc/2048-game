import { createCellsObj } from '../createCells';
import moveCells from '../moveCells';
import { DIRECTION } from '../../components/constants/AppConsatnts'

// eslint-disable-next-line jest/valid-title
it('move doun', () => {
    const initCells = [createCellsObj(1, 3, 2, 'test'), createCellsObj(1, 0, 2, 'test')];
    expect(moveCells(initCells, DIRECTION.UP)).toEqual(
    [
        {x:1, y:0, value:2, id: 'test'}
    ])
})