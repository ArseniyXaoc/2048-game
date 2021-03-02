/* eslint-disable no-undef */
import { createCellsObj } from '../createCells';
import moveCells from '../moveCells';
import { DIRECTION } from '../../components/constants/AppConsatnts';

it('move ', () => {
  const initCells = [createCellsObj(1, 3, 2, 'key')];
  expect(moveCells(initCells, DIRECTION.UP)).toEqual(
    [
      {
        x: 1, y: 0, value: 2, id: 'key',
      },
    ],
  );
});

it('move  2', () => {
  const initCells = [createCellsObj(1, 3, 2, 'key'), createCellsObj(1, 2, 2, 'key1')];
  expect(moveCells(initCells, DIRECTION.UP)).toEqual(
    [
      {
        x: 1, y: 1, value: 2, id: 'key',
      },
      {
        x: 1, y: 0, value: 2, id: 'key1',
      },
    ],
  );
});

it('move  3', () => {
  const initCells = [createCellsObj(1, 3, 2, 'key'), createCellsObj(2, 3, 2, 'key1')];
  expect(moveCells(initCells, DIRECTION.UP)).toEqual(
    [
      {
        x: 1, y: 0, value: 2, id: 'key',
      },
      {
        x: 2, y: 0, value: 2, id: 'key1',
      },
    ],
  );
});

it('move  4', () => {
  const initCells = [createCellsObj(1, 3, 2, 'key'), createCellsObj(1, 2, 2, 'key1'), createCellsObj(2, 3, 2, 'key2'), createCellsObj(3, 3, 2, 'key3')];
  expect(moveCells(initCells, DIRECTION.UP)).toEqual(
    [
      {
        x: 1, y: 1, value: 2, id: 'key',
      },
      {
        x: 1, y: 0, value: 2, id: 'key1',
      },
      {
        x: 2, y: 0, value: 2, id: 'key2',
      },
      {
        x: 3, y: 0, value: 2, id: 'key3',
      },
    ],
  );
});
