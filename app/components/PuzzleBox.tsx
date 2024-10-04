import React from "react";
import { Step, Word } from "./AddPuzzle";

type PuzzleBoxProps = {
    char: string;
    structure: string;
    currentWord: number;
    words: Word[];
    step: Step;
    handleBoxClick: (char: string) => void;
}
const PuzzleBox = ({char, structure, currentWord, words, step, handleBoxClick} : PuzzleBoxProps) => {
    const isLit = !structure.includes(char);
    let highlighted = false;
    if (step === Step.WordInfo) {
        const selectedWord = words[currentWord];
        highlighted = selectedWord.characters.includes(char);
    };

    return (
        <div
            className={`border-black border-2 w-[10vw] h-[10vw] box-border m-0`}
            onClick={() => handleBoxClick(char)}
            style={{
                backgroundColor: isLit ? "white" : "black",
                borderColor: highlighted ? "yellow" : "black",
                borderWidth: highlighted ? 4 : 2,
            }}
        ></div>
    );
};

export default PuzzleBox;