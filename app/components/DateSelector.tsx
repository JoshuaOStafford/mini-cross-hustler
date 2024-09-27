import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs'; 

type DateSelectorProps = {
  date: Date | null;
  setDate: (date: Date | null) => void;
};

export default function DateSelector({ date, setDate }: DateSelectorProps) {
 
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}>
        <DatePicker 
        value={date ? dayjs(date) : null}
        onChange={(newValue) => setDate(newValue ? newValue.toDate() : null)}
        label="Select Date" />
      </DemoContainer>
    </LocalizationProvider>
  );
}