"use client";
import React, { useState } from "react";
import DateSelector from "@components/DateSelector";

enum Step {
    Date,
    Structure,
    Order,
    Time,
    Submit
}

const AddPuzzle = () => {
    const [date, setDate] = useState("2024-01-01");
    const [time, setTime] = useState(0);
    const [structure, setStructure] = useState("");
    const [words, setWords] = useState<string[]>([]);
    const [order, setOrder] = useState<string[]>([]);
    const [currentStep, setCurrentStep] = useState<Step>(Step.Date);

    return (
        <div>
        <h1>Add Puzzle</h1>
        <DateSelector />
        </div>
    );
};

export default AddPuzzle;
    
