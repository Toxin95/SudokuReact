
export const SQUAREBOX = {
    'A': [1, 2, 3, 10, 11, 12, 19, 20, 21],
    'B': [4, 5, 6, 13, 14, 15, 22, 23, 24],
    'C': [7, 8, 9, 16, 17, 18, 25, 26, 27],
    'D': [28, 29, 30, 37, 38, 39, 46, 47, 48],
    'E': [31, 32, 33, 40, 41, 42, 49, 50, 51],
    'F': [34, 35, 36, 43, 44, 45, 52, 53, 54],
    'G': [55, 56, 57, 64, 65, 66, 73, 74, 75],
    'H': [58, 59, 60, 67, 68, 69, 76, 77, 78],
    'I': [61, 62, 63, 70, 71, 72, 79, 80, 81],

};

export const getSquareNumbers = (letter) => SQUAREBOX[letter];

export const getSquareLetter = (number) => {
    switch (true) {
        case (number >= 1 && number < 28):
            switch (true) {
                case (SQUAREBOX.A.find((boxIndex) => number === boxIndex) !== undefined):
                    return 'A';
                case (SQUAREBOX.B.find((boxIndex) => number === boxIndex) !== undefined):
                    return 'B';
                case (SQUAREBOX.C.find((boxIndex) => number === boxIndex) !== undefined):
                    return 'C';
                default:

            }
            break;
        case (number >= 28 && number < 55):
            switch (true) {
                case (SQUAREBOX.D.find((boxIndex) => number === boxIndex) !== undefined):
                    return 'D';
                case (SQUAREBOX.E.find((boxIndex) => number === boxIndex) !== undefined):
                    return 'E';
                case (SQUAREBOX.F.find((boxIndex) => number === boxIndex) !== undefined):
                    return 'F';
                default:

            }
            break;
        case (number >= 55 && number < 82):
            switch (true) {
                case (SQUAREBOX.G.find((boxIndex) => number === boxIndex) !== undefined):
                    return 'G';
                case (SQUAREBOX.H.find((boxIndex) => number === boxIndex) !== undefined):
                    return 'H';
                case (SQUAREBOX.I.find((boxIndex) => number === boxIndex) !== undefined):
                    return 'I';
                default:

            }
            break;
        default:
            return false;
    }
}

export const MoveBox = (currentBox, direction) => {
    let { boxnumber, squarename } = currentBox.dataset;
    let newboxnumber = parseInt(boxnumber);
    let newsquarename = squarename;
    switch (direction) {
        case 'ArrowLeft':
            if (boxnumber === 1) {
                newboxnumber = 81;
            } else {
                newboxnumber--;
            }
            break;
        case 'ArrowUp':
            if (boxnumber >= 1 && boxnumber < 10) {
                newboxnumber = boxnumber + 72;
            } else {
                newboxnumber -= 9;
            }
            break;
        case 'ArrowRight':
            if (boxnumber === 81) {
                newboxnumber = 1;
            } else {
                newboxnumber++;
            }
            break;
        case 'ArrowDown':
            if (boxnumber >= 73 && boxnumber < 82) {
                newboxnumber = boxnumber - 72;
            } else {
                newboxnumber += 9;
            }
            break;
        default:
    }
    newsquarename = getSquareLetter(newboxnumber);
    return { square: newsquarename, box: newboxnumber };
};

export const isCorrect = (box, boxValue) => {
    let { boxnumber, squarename } = box.dataset;
    let {squareError, rowError, colError, allError} = [];
    let {square, row, col, all} = boxToControlFromBoxNumber({ boxnumber, squarename });
    const filterCallback = (box) => (getValueFromBoxId(`${getSquareLetter(box)}_${box}`) && getValueFromBoxId(`${getSquareLetter(box)}_${box}`) === boxValue);
    // squareError = square.filter(filterCallback);
    // rowError = row.filter(filterCallback);
    // colError = col.filter(filterCallback);
    allError = all.filter(filterCallback);
    //check the square
    return allError;
}

export const getValueFromBoxId = (boxId) => (document.getElementById(boxId) && document.getElementById(boxId).dataset.number !== false) ? parseInt(document.getElementById(boxId).dataset.number) : false; 

export const boxToControlFromBoxNumber = ({boxnumber, squarename}) => {
    let square = SQUAREBOX[squarename];
    let row = [];
    let col = [];
    let all = [];
    boxnumber = parseInt(boxnumber);
    let colNumber = ((boxnumber % 9) === 0) ? 9 : boxnumber % 9;
    let rowNumber = Math.floor((boxnumber - 1) / 9) * 9;
    for(let i = 0;i<9;i++) {
        row.push(rowNumber+i+1);
        col.push(colNumber + (i * 9));
    };
    all = [...new Set(row.concat(col, square))];
   return {
    square: square.filter((box) => box !== boxnumber), 
    row: row.filter(box => box !== boxnumber), 
    col: col.filter(box => box !== boxnumber),
    all: all,
};
}

export const getRandomInt = (min = 0, max) => Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min)) + Math.ceil(min));