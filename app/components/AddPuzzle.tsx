"use client";
import React, { useState } from "react";
import DateSelector from "@components/DateSelector";
import dayjs from "dayjs";

enum Step {
    Date,
    Structure,
    Order,
    Time,
    Submit
}

const AddPuzzle = () => {
    const [date, setDate] = useState<Date | null>(new Date());    const [time, setTime] = useState(0);
    const [structure, setStructure] = useState("");
    const [words, setWords] = useState<string[]>([]);
    const [order, setOrder] = useState<string[]>([]);
    const [currentStep, setCurrentStep] = useState<Step>(Step.Date);

    return (
        <div>
        <h1>Add Puzzle for {date ? dayjs(date).format("MMMM D, YYYY") : ""}</h1>
        <DateSelector date={date} setDate={setDate} />
        </div>
    );
};

export default AddPuzzle;
    
