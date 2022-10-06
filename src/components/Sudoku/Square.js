import React from 'react';
import Box from './Box';

function Square({ name, boxNumbers, handleClick }) {
    return (
        <>
        <div className='square-box' id={`sqare_${name}`}>
            {boxNumbers.map((boxNumber) => <Box
                key={boxNumber.boxIndex}
                squareName={name}
                boxNumber={boxNumber}
                handleClick={handleClick}
                
            />
            )}
        </div>
        </>
    )
}

export default Square;