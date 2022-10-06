import React from 'react';

function Box({squareName, boxNumber, handleClick}) {
    let { boxIndex, defaultNumber, currentNumber, possibleNumbers} = boxNumber;
let number = defaultNumber || currentNumber;
    return (
            <div data-boxnumber={boxIndex} data-squarename={squareName} data-number={number} onClick={handleClick} className={(currentNumber) ? 'color-blue box-number' : 'box-number'} id={squareName + '_' + boxIndex}>
                {(number) && <h1>{number}</h1>}
            </div>
    )
}

export default Box;