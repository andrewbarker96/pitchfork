import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles'
import { Grid } from '@mui/material';
import { Box } from '@mui/system'
import Paper from '@mui/material/Paper'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  boxShadow: 'none',
}));

const ReservationForm = () => {
    return (
        <div>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing = {2}>
                        <Grid item xs={12} sm={6} md={6}>
                            <TextField label="First Name" fullWidth/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <TextField label="Last Name" fullWidth/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <TextField label="Email" fullWidth/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <TextField label="Phone Number" fullWidth/>
                        </Grid>
                        {/* <Grid item xs={12} sm={6} md={6}>
                            <DatePicker label="Date of Reservation" slotProps={{ textField: { fullWidth: true } }}/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={6}>
                            <TimePicker label="Time of Reservation" slotProps={{ textField: { fullWidth: true } }}/>
                        </Grid> */}
                        <Grid item xs={12} sm={6} md={6}>
                            <Button variant='contained'>Submit</Button>
                        </Grid>
                    </Grid>
                </Box>
            </LocalizationProvider>
        </div>
        // <LocalizationProvider dateAdapter={AdapterDayjs}>
        // <form className = 'space-between md:flex-col'>

        //     <div className = 'form'>
        //         <TextField label="First Name" fullWidth/>
        //     </div>
        //     <div className = 'form'>
        //         <TextField label="Last Name" fullWidth/>
        //     </div>
        //     <div className = 'form'>
        //         <TextField label="Email" fullWidth/>
        //     </div>
        //     <div className = 'form'>
        //         <TextField label="Phone Number" fullWidth/>
        //     </div>
        //     <div className = 'form'>
        //         <DatePicker label="Date of Reservation" slotProps={{ textField: { fullWidth: true } }}/>
        //     </div>
        //     <div className = 'form'>
        //         <TimePicker label="Time of Reservation" slotProps={{ textField: { fullWidth: true } }}/>
        //     </div>
        //     <div className = 'form'>
        //         <Button variant='contained'>Submit</Button>
        //     </div>
        // </form>
        // </LocalizationProvider>
    );
}

export default ReservationForm