import { type } from 'os';
import React from 'react';
import './field.css';

export type FieldProps = {
    cells: {
        x: number,
        y: number,
        id: string,
        value: number,
    }[]
}

type FieldCellsProps = {
    x: number,
    y: number,
    key: string | number,
    value: number,
}

const FieldCells = ({ x, y, value }: FieldCellsProps) => {
    const color = (Math.log2(value) - 1) * 10;
    console.log(color);
    const coordinateX = (x * 100) ;
    const coordinateY = (y * 100) ;
    return <div className='field-cells' style={{
        transform: `translate(${coordinateX}px, ${coordinateY}px)`,
        //top: (x * 25) + '%',
        //left: (y * 25) + '%',
        backgroundColor: `hsl(0, ${color}%, 68%)`,
    }}>{value}</div>;
}

export const Field = ({ cells }: FieldProps) => {
    return (

        <div className='field'>
            <Background/>
            {
                cells.map(item => <FieldCells
                    x={item.x}
                    y={item.y}
                    key={item.id}
                    value={item.value} />)
            }
        </div>
    )
}


export const Background = () => {
    const cellsBackground = [];
    for (let i = 0; i < 16; i++) {
        cellsBackground.push(<div key ={i} className = 'background-cells'></div>)
    }
    return(
        <React.Fragment>{cellsBackground}</React.Fragment>
        
    )
}
