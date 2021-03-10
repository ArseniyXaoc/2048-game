import React from 'react';
import './field.css';

export type FieldProps = {
  cells: {
    x: number,
    y: number,
    id: string | number,
    value: number,
  }[]
};

type FieldCellsProps = {
  x: number,
  y: number,
  key: string | number,
  value: number,
};

const FieldCells = ({ x, y, value }: FieldCellsProps) => {
  const color = (Math.log2(value) - 1) * 10;
  const [coordinateX, coordinateY] = [x, y].map(coor => coor * 100);
  return (
    <div
      className="field-cells"
      style={{
        transform: `translate(${coordinateX}px, ${coordinateY}px)`,
        backgroundColor: `hsl(0, ${color}%, 68%)`,
      }}
    >
      {value}
    </div>
  );
};

export const Field = ({ cells }: FieldProps) => (

  <div className="field">
    <Background />
    {
                cells.map((item) => (
                  <FieldCells
                    x={item.x}
                    y={item.y}
                    key={item.id}
                    value={item.value}
                  />
                ))
            }
  </div>
);

export const Background = () => {
  const cellsBackground = [];
  for (let i = 0; i < 16; i++) {
    cellsBackground.push(<div key={i} className="background-cells" />);
  }
  return (
    <>{cellsBackground}</>

  );
};
