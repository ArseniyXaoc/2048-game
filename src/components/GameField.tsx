import React, {useState} from 'react';
import { Field } from './Field';
import { createStartingCells } from '../logic'


// const cells: {x: number, y: number, id: number, value: number }[] = [
//     { x: 0, y: 0, id: 1, value: 2 },
//     { x: 1, y: 0, id: 2, value: 4 },
//     { x: 2, y: 0, id: 3, value: 8 },
//     { x: 3, y: 0, id: 4, value: 16 },
//     { x: 0, y: 1, id: 5, value: 32 },
//     { x: 1, y: 1, id: 6, value: 64 },
//     { x: 2, y: 1, id: 7, value: 128 },
//     { x: 3, y: 1, id: 8, value: 256 },
//     { x: 0, y: 2, id: 9, value: 512 },
//     { x: 1, y: 2, id: 10, value: 1024 },
//     { x: 2, y: 2, id: 11, value: 2048 },
//     { x: 3, y: 2, id: 12, value: 2 },
//     { x: 0, y: 3, id: 13, value: 4 },
//     { x: 1, y: 3, id: 14, value: 8 },
//     { x: 2, y: 3, id: 15, value: 16 },
//     { x: 3, y: 3, id: 16, value: 32 },
// ];

export const GameField = () => {
    const [cells, setCells] = useState(createStartingCells());
    return (
        <div>
            <button className="waves-effect waves-light btn" onClick = {() => console.log(cells)}>button</button>
            <Field cells={cells} />
        </div>
            

        
    )
}