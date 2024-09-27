"use client";
import React, { useState } from "react";
import DateSelector from "@components/DateSelector";
import dayjs from "dayjs";
import PuzzleStructure from "./PuzzleStructure";
import Instructions from "@components/Instructions";
import TimeSelector from "@components/TimeSelector";


export enum Step {
    Structure,
    Time,
    Submitting,
    Submitted,
    Error,
    WordInfo
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

        {(currentStep === Step.Structure || currentStep === Step.WordInfo) && <PuzzleStructure structure={structure} setStructure={setStructure} />}
        {currentStep === Step.Time && <TimeSelector time={time} setTime={setTime} />}
        
        <div className="flex space-x-2">
            {currentStep > Step.Structure && <button onClick={() => setCurrentStep(currentStep - 1)}>Back</button>}
            {currentStep < Step.Submitted && <button onClick={() => setCurrentStep(currentStep + 1)}>Next</button>}
        </div>
        
        </div>
    );
};

export default AddPuzzle;
    
