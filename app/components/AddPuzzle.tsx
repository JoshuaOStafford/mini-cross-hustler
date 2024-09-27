"use client";
import React, { useState } from "react";
import DateSelector from "@components/DateSelector";
import dayjs from "dayjs";
import PuzzleStructure from "./PuzzleStructure";

enum Step {
    Structure,
    Order,
    Time,
    Submit
}

const AddPuzzle = () => {
    const [date, setDate] = useState<Date | null>(new Date());    
    const [time, setTime] = useState(0);
    const [structure, setStructure] = useState("");
    const [words, setWords] = useState<string[]>([]);
    const [order, setOrder] = useState<string[]>([]);
    const [currentStep, setCurrentStep] = useState<Step>(Step.Structure);

    return (
        <div>
        <h1>Add Puzzle for {date ? dayjs(date).format("MMMM D, YYYY") : ""}</h1>
        <DateSelector date={date} setDate={setDate} />
        <PuzzleStructure structure={structure} setStructure={setStructure} />
        </div>
    );
};

export default AddPuzzle;
    
