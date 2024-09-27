import React from "react";
import PuzzleBox from "@components/PuzzleBox";
type PuzzleStructureProps = {
    structure: string;
    setStructure: (structure: string) => void;
}
const PuzzleStructure = ({ structure, setStructure }: PuzzleStructureProps) => {

    
    /**
     * Handles a box being clicked by adding or removing it from the structure
     * string. If a char is in structure, its box is black or void in crossword. 
     * If not, it is added.The structure string is then sorted alphabetically.
     * @param char The character of the box being clicked
     */
    const handleBoxClick = (char: string) => {

        // if box is already selected, remove it
        if (!structure.includes(char)) {
            console.log("box was selected");
            console.log(char);
            setStructure(structure + char);
        } else {
            console.log("box was not selected")
            setStructure(structure.replace(char, ''));
        }
        console.log("test: " + structure); // for debugging
    }

    return (
        <div>
            <h1>Puzzle Structure</h1>
            <div className="grid grid-cols-5 gap-0">
                {['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y'].map((char, index) => (
                    <PuzzleBox key={index} char={char} structure={structure} handleBoxClick={handleBoxClick} />
                ))}
            </div>
        </div>
    );
};

export default PuzzleStructure;