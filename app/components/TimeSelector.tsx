import React from "react";

interface TimeSelectorProps {
  time: number,
  setTime: (time: number) => void
};

const TimeSelector = ({ time, setTime }: TimeSelectorProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (isNaN(value)) return;
    setTime(value);
  }

  return (
    <div className="flex items-center">
      <label htmlFor="seconds" className="mr-2">Seconds:</label>
      <input
        type="number"
        id="seconds"
        value={time}
        onChange={handleChange}
        className="border-2 border-gray-400 rounded-md px-2 py-1"
      />
    </div>
  );
};

export default TimeSelector;