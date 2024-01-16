import * as React from 'react';
import Grid from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

const ReservationForm = () => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
        <form className = 'space-between md:flex-col'>
            <div className = 'form'>
                <TextField label="First Name" fullWidth/>
            </div>
            <div className = 'form'>
                <TextField label="Last Name" fullWidth/>
            </div>
            <div className = 'form'>
                <TextField label="Email" fullWidth/>
            </div>
            <div className = 'form'>
                <TextField label="Phone Number" fullWidth/>
            </div>
            <div className = 'form'>
                <DatePicker label="Date of Reservation"/>
            </div>
            <div className = 'form'>
                <TimePicker label="Time of Reservation"/>
            </div>
            <div className = 'form'>
                <Button variant='contained'>Submit</Button>
            </div>
        </form>
        </LocalizationProvider>
    );
}

export default ReservationForm