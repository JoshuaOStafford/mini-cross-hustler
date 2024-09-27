"use client";
import React, { useState } from "react";
import DateSelector from "@components/DateSelector";
import dayjs from "dayjs";
import PuzzleStructure from "./PuzzleStructure";
import Instructions from "@components/Instructions";
import TimeSelector from "@components/TimeSelector";
import axios from "axios";


export enum Step {
    Date,
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
    const [currentStep, setCurrentStep] = useState<Step>(Step.Date);

    async function handleSubmit() {
        try {
            const response = await axios.post("http://localhost:4000/puzzle", {
                date,
                time,
                structure,
                wordsData
            });
            console.log(response);
            setCurrentStep(Step.Submitted);
        } catch (error) {
            console.error(error);
            setCurrentStep(Step.Error);
        }
    }

    // will need to pass date, time, structure, and wordsData to database on submit

    return (
        <div>
        <h1>Add Puzzle {time} for {date ? dayjs(date).format("MMMM D, YYYY") : ""}</h1>

        <DateSelector date={date} setDate={setDate} />

        <Instructions currentStep={currentStep} />

        {(currentStep === Step.Structure || currentStep === Step.WordInfo) && <PuzzleStructure structure={structure} setStructure={setStructure} />}
        {currentStep === Step.Time && <TimeSelector time={time} setTime={setTime} />}
        {currentStep === Step.Time && <button
            onClick={handleSubmit}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
        >
            Submit Puzzle
        </button>}

        
        <div className="flex space-x-2">
            {currentStep > Step.Structure && <button onClick={() => setCurrentStep(currentStep - 1)}>Back</button>}
            {currentStep < Step.Submitted && <button onClick={() => setCurrentStep(currentStep + 1)}>Next</button>}
        </div>
        
        </div>
    );
};

export default AddPuzzle;
    
