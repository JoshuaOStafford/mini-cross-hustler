import React from "react";
import { Step } from "@components/AddPuzzle";

type InstructionProps = {
  currentStep: Step;
};

const Instructions = ({ currentStep }: InstructionProps) => {
  let prompt = "";
  let details = ""
  switch (currentStep) {
    case Step.Date:
      prompt = "Hit next once you've selected the puzzles date";
      break;
    case Step.Structure:
      prompt = "Input Mini Cross Structure";
      details = "Click boxes to toggle between white and black. Match the pattern of the crossword you want to insert";
      break;
    case Step.WordInfo:
      prompt = "Tell us more about each word";
      break;
    case Step.Time:
      prompt = "How log did it take you to solve it?";
      break;
    case Step.Submitting:
      prompt = "Submitting...";
      break;
    case Step.Submitted:
      prompt = "Success!";
      details = "Your puzzle was saved.";
      break;
    case Step.Error:
        prompt = "Oh uh";
        details = "You did nothing wrong, but something went wrong on our end. We will fix it shortly. Please check back later";
        break;
    default:
      throw new Error(`Unexpected Step enum value: ${currentStep}`);
  }
  
  
    return (
    <div>
        <h2 className="text-2xl font-bold">{prompt}</h2>
        <p className="text-sm">{details}</p>
    </div>
  );
};

export default Instructions;