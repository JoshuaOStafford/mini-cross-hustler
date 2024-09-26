"use client";
import React, { useState } from "react";

enum Step {
    Date,
    Structure,
    Order,
    Time,
    Submit
}

const AddPuzzle = () => {
    const [date, setDate] = useState("");
    const [time, setTime] = useState(0);
    const [structure, setStructure] = useState("");
    const [words, setWords] = useState<string[]>([]);
    const [order, setOrder] = useState<string[]>([]);
    const [currentStep, setCurrentStep] = useState<Step>(Step.Date);

    return (
        <h1>Add Puzzle</h1>
    );
};

export default AddPuzzle;
    
