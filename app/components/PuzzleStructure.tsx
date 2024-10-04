import React from "react";
import PuzzleBox from "@components/PuzzleBox";
import { Step, Word } from "@components/AddPuzzle";
type PuzzleStructureProps = {
    structure: string;
    setStructure: (structure: string) => void;
    words: Word[];
    currentWord: number;
    step: Step;
}
const PuzzleStructure = ({ structure, setStructure, words, currentWord, step }: PuzzleStructureProps) => {

    const indexes = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 
    'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y']
    /**
     * Handles a box being clicked by adding or removing it from the structure
     * string. If a char is in structure, its box is black or void in crossword. 
     * If not, it is added.The structure string is then sorted alphabetically.
     * @param char The character of the box being clicked
     */
    const handleBoxClick = (char: string) => {
        if (step !== Step.Structure) {
            return; // do nothing is click made outside structure setting step
        }
        // if box is already selected, remove it from structure
        const newStructure = !structure.includes(char) ? [...structure, char].sort().join('') : structure.replace(char, '').split('').sort().join('');
        setStructure(newStructure);
    }

    return (
        <div>
            <div className="border-black border-2 box-border w-1/2">
            <div className="grid grid-cols-5">
                {indexes.map((char, index) => (
                    <PuzzleBox key={index} words={words} char={char} structure={structure} currentWord={currentWord} step={step} handleBoxClick={handleBoxClick} />
                ))}
            </div>
            </div>
        </div>
    );
};

export default PuzzleStructure;