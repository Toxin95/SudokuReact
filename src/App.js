import React from 'react';
import SudokuGrid from './components/Sudoku/SudokuGrid';
import 'rsuite/dist/rsuite.min.css'; // or 'rsuite/dist/rsuite.min.css'
import './App.scss';
const defaultData = {
    'A': {
        boxNumbers: [
            {
                boxIndex: 1,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 2,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 3,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 10,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 11,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 12,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 19,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 20,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 21,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
        ]
    },
    'B': {
        boxNumbers: [
            {
                boxIndex: 4,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 5,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 6,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 13,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 14,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 15,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 22,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 23,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 24,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
        ]
    },
    'C': {
        boxNumbers: [
            {
                boxIndex: 7,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 8,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 9,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 16,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 17,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 18,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 25,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 26,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 27,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
        ]
    },
    'D': {
        boxNumbers: [
            {
                boxIndex: 28,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 29,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 30,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 37,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 38,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 39,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 46,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 47,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 48,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
        ]
    },
    'E': {
        boxNumbers: [
            {
                boxIndex: 31,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 32,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 33,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 40,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 41,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 42,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 49,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 50,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 51,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
        ]
    },
    'F': {
        boxNumbers: [
            {
                boxIndex: 34,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 35,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 36,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 43,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 44,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 45,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 52,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 53,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 54,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
        ]
    },
    'G': {
        boxNumbers: [
            {
                boxIndex: 55,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 56,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 57,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 64,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 65,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 66,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 73,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 74,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 75,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
        ]
    },
    'H': {
        boxNumbers: [
            {
                boxIndex: 58,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 59,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 60,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 67,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 68,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 69,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 76,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 77,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 78,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
        ]
    },
    'I': {
        boxNumbers: [
            {
                boxIndex: 61,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 62,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 63,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 70,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 71,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 72,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 79,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 80,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
            {
                boxIndex: 81,
                defaultNumber: false,
                currentNumber: false,
                possibleNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
                isCorrect: null,
            },
        ]
    },
};
const SudokuContext = React.createContext(defaultData);
function App() {
    return (
        <>
            <SudokuContext.Provider value={defaultData}>
                <SudokuGrid></SudokuGrid>
            </SudokuContext.Provider>
        </>
    );
}

export { SudokuContext };
export default App;
