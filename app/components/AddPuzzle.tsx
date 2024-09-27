"use client";
import React, { useState } from "react";
import DateSelector from "@components/DateSelector";
import dayjs from "dayjs";
import PuzzleStructure from "./PuzzleStructure";
import Instructions from "@components/Instructions";


export enum Step {
    Structure,
    WordInfo,
    Time,
    Submitting,
    Submitted,
    Error
}

export interface Word {
    name: string;
    known: "yes" | "with_clue" | "no";
    order: number;
}

const AddPuzzle = () => {
    const [date, setDate] = useState<Date | null>(new Date());    
    const [time, setTime] = useState(0);
    const [structure, setStructure] = useState("");
    const [words, setWords] = useState<string[]>([]);
    const [wordsData, setWordsData] = useState<Word[]>([]);
    const [currentStep, setCurrentStep] = useState<Step>(Step.Structure);

    // will need to pass date, time, structure, and wordsData to database on submit

    return (
        <div>
        <h1>Add Puzzle for {date ? dayjs(date).format("MMMM D, YYYY") : ""}</h1>
        <DateSelector date={date} setDate={setDate} />
        <Instructions currentStep={currentStep} />
        <PuzzleStructure structure={structure} setStructure={setStructure} />
        </div>
    );
};

export default AddPuzzle;
    
