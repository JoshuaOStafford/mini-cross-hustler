import React from "react";

type PuzzleBoxProps = {
    char: string;
    structure: string;
    handleBoxClick: (char: string) => void;
}
const PuzzleBox = ({char, structure, handleBoxClick} : PuzzleBoxProps) => {
    const isLit = !structure.includes(char);

    return (
        <div
            className={`border-black border-2 w-[10vw] h-[10vw] box-border m-0`}
            onClick={() => handleBoxClick(char)}
            style={{ backgroundColor: isLit ? "white" : "black" }}
        ></div>
    );
};

export default PuzzleBox;