"use client";
import React, { useState } from "react";
import DateSelector from "@components/DateSelector";
import dayjs from "dayjs";
import PuzzleStructure from "./PuzzleStructure";
import Instructions from "@components/Instructions";
import TimeSelector from "@components/TimeSelector";
import axios from "axios";
import wordsFromStructure from "../../utils/wordsFromStructure";
import WordInfoInserter from "./WordInfoInserter";


export enum Step {
    Date,
    Structure,
    WordInfo,
    Time,
    Submitting,
    Submitted,
    Error,
}

export interface Word {
    name: string;
    length: number;
    characters: string;
    known: "yes" | "with_letters" | "no" | "unknown";
}

const AddPuzzle = () => {
    const [date, setDate] = useState<Date | null>(new Date());    
    const [time, setTime] = useState(0);
    const [structure, setStructure] = useState("");
    const [words, setWords] = useState<Word[]>([]);
    const [currentWord, setCurrentWord] = useState(0);
    const [currentStep, setCurrentStep] = useState<Step>(Step.Date);
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit() {
        if (time === 0) {
            setError("Time must be greater than 0");
            return;
        }
        console.log(date, time, structure, words);
        try {
            const response = await axios.post("http://localhost:3000/api/puzzle", {
                date,
                solveTime: time,
                structure,
                words
            });
            console.log(response);
            setCurrentStep(Step.Submitted);
        } catch (error) {
            console.error(error);
            setCurrentStep(Step.Error);
        }
    }

    function handleBack() {
        setCurrentStep(currentStep - 1);
    }

    function handleNext() {
        if (currentStep === Step.Structure) {
            setWords(wordsFromStructure(structure));
            console.log(words);
        }
        if (currentStep === Step.WordInfo) {
            for (let i = 0; i < words.length; i++) {
                if (words[i].known === "unknown") {
                    setError("Additional details needed before moving on");
                    return;
                }
            }
        }
        setCurrentStep(currentStep + 1);

    }


    // will need to pass date, time, structure, and wordsData to database on submit

    return (
        <div>
        <h1 className="pb-4" >Add Puzzle for {date ? dayjs(date).format("MMMM D, YYYY") : ""}</h1>

        {error && <p>{error}</p>}

        <Instructions currentStep={currentStep} />
        {currentStep === Step.Date && <DateSelector date={date} setDate={setDate} />}
        {(currentStep === Step.WordInfo) && <WordInfoInserter words={words} setWords={setWords} currentWord={currentWord} setCurrentWord={setCurrentWord}/>}

        {(currentStep === Step.Structure || currentStep === Step.WordInfo) && 
        <PuzzleStructure 
            structure={structure} 
            setStructure={setStructure} 
            currentWord={currentWord} 
            words={words} 
            step={currentStep} 
        />}
        {currentStep === Step.Time && <TimeSelector time={time} setTime={setTime} />}
        

        
        <div className="flex space-x-2">
            {currentStep > Step.Date && 
                <button 
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleBack}>Back</button>}

            {currentStep < Step.Time && 
                <button 
                className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
                onClick={handleNext}>Next</button>}

            {currentStep === Step.Time && 
                <button
                    onClick={handleSubmit}
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                >
                    Submit Puzzle</button>}
        </div>
        
        </div>
    );
};

export default AddPuzzle;
    
