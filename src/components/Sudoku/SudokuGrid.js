import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Button, Col, Grid, Row, SelectPicker } from 'rsuite';
import { SudokuContext } from '../../App';
import { getSquareLetter, isCorrect, MoveBox } from '../../utils/utils';
import { Sudoku } from '../../utils/sudokuGenerator';
import Square from './Square';
function SudokuGrid({ numbers }) {
    const defaultData = useContext(SudokuContext);
    const [schema, setSchema] = useState([]);
    const [currentBox, setCurrentBox] = useState(null);
    const [errors, setErrors] = useState([]);
    const [difficulty, setDifficulty] = useState('easy');

    const changeCurrentBox = useCallback((element = null) => {
        if (currentBox) {
            currentBox.classList.remove('current');
        }
        if (element) {
            element.classList.add('current');
        }
        setCurrentBox(element);
    }, [currentBox]);

    const handleBoxClick = (e) => changeCurrentBox(e.target);

    const addNumberToCell = (boxnumber, squarename, value, isDefault = false) => {
        try {
            let boxInfo = defaultData[squarename].boxNumbers.find((box) => box.boxIndex === parseInt(boxnumber));
            if (isDefault) {
                boxInfo.defaultNumber = value;
            } else {
                boxInfo.currentNumber = value;
            }
            //check if is correct
            return checkIsCorrect({ dataset: { boxnumber, squarename } }, parseInt(value));
        } catch (ex) {
            console.info(boxnumber);
            console.info(squarename);
            console.info(value);
        }


    }

    const checkIsCorrect = (currentBox, numberAdded) => {
        setErrors(isCorrect(currentBox, parseInt(numberAdded)));

    }

    useEffect(() => {
        if (schema.length) {
            schema.forEach((value, index) => {
                if (value) {
                    addNumberToCell(index, getSquareLetter(index), value, true);
                }
            });
        }
    }, [schema]);

    useEffect(() => {
        const handleUserKeyPress = (event) => {
            const { key, keyCode } = event;
            if ([8, 32, 46, 96].find(x => keyCode === x)) {
                let { boxnumber, squarename } = currentBox.dataset;
                addNumberToCell(boxnumber, squarename, null);
                changeCurrentBox(null);
            }

            if (currentBox && ((keyCode >= 49 && keyCode <= 57) || (keyCode >= 97 && keyCode <= 105))) {
                let { boxnumber, squarename } = currentBox.dataset;
                addNumberToCell(boxnumber, squarename, key);
                changeCurrentBox(null);
            }
            if (keyCode >= 37 && keyCode <= 40) {
                var newBox = null;
                if (currentBox) {
                    var { square, box } = MoveBox(currentBox, key);
                    newBox = document.getElementById(`${square}_${box}`);
                } else {
                    newBox = document.getElementById('A_1');
                }
                changeCurrentBox(newBox);
            }
        };


        window.addEventListener("keydown", handleUserKeyPress);
        return () => {
            window.removeEventListener("keydown", handleUserKeyPress);
        };
    }, [changeCurrentBox, currentBox, defaultData])

    useEffect(() => {
        console.log(errors);
        Array.from(document.getElementsByClassName('error')).forEach((element) => element.classList.remove('error'));
        if (errors) {
            errors.forEach((box) => document.getElementById(`${getSquareLetter(box)}_${box}`).classList.add('error'));
        }
    }, [errors])

    return (
        <div className='show-grid'>
            <SelectPicker data={[
                "easy",
                "medium",
                "hard",
                "very-hard",
                "insane",
                "inhuman"
                ].map(val => ({value: val, label: val}))}
                onChange={(value) => setDifficulty(value)} />
            <Button onClick={() => {
                let sudoku = Sudoku.generate(difficulty);
                console.log(Sudoku.board_string_to_grid(sudoku));
                setSchema([undefined, ...sudoku.split('').map((value) => ((value === '.') ? null : value))])
            }}>Generate Sudoku</Button>
            <Grid justify='center'>
                <Row>
                    <Col className="sudoku-row">
                        <Square name='A' boxNumbers={defaultData.A.boxNumbers} handleClick={handleBoxClick} ></Square>
                        <Square name='B' boxNumbers={defaultData.B.boxNumbers} handleClick={handleBoxClick} ></Square>
                        <Square name='C' boxNumbers={defaultData.C.boxNumbers} handleClick={handleBoxClick} ></Square>
                    </Col>
                </Row>
                <Row>
                    <Col className="sudoku-row">
                        <Square name='D' boxNumbers={defaultData.D.boxNumbers} handleClick={handleBoxClick} ></Square>
                        <Square name='E' boxNumbers={defaultData.E.boxNumbers} handleClick={handleBoxClick} ></Square>
                        <Square name='F' boxNumbers={defaultData.F.boxNumbers} handleClick={handleBoxClick} ></Square>
                    </Col>
                </Row>
                <Row>
                    <Col className="sudoku-row">
                        <Square name='G' boxNumbers={defaultData.G.boxNumbers} handleClick={handleBoxClick} ></Square>
                        <Square name='H' boxNumbers={defaultData.H.boxNumbers} handleClick={handleBoxClick} ></Square>
                        <Square name='I' boxNumbers={defaultData.I.boxNumbers} handleClick={handleBoxClick} ></Square>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
}

export default SudokuGrid;