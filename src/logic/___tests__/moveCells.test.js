import { createCellsObj } from '../createCells';
import moveCells from '../moveCells';
import { DIRECTION } from '../../components/constants/AppConsatnts'

// eslint-disable-next-line jest/valid-title
it('move doun', () => {
    const initCells = [createCellsObj(0, 3, 2, 'test')];
    expect(moveCells(initCells, DIRECTION.DOUN)).toEqual(
    [
        {x:0, y:3, value:2, id: 'test'}
    ])
})