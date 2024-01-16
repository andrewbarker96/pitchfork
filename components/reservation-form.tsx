import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers';
import { Button } from '@mui/material';

const ReservationForm = () => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <form className = 'space-between md:flex-col'>
            <div className = 'form'>
                <DatePicker label="Date of Reservation" />
            </div>
            <div className = 'form'>
                <TimePicker label="Time of Reservation" />
            </div>
            <div className = 'form'>
                <Button variant='contained'>Submit</Button>
            </div>
        </form>
        </LocalizationProvider>
    );
}

export default ReservationForm