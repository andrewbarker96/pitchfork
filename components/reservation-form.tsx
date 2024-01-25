import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers';
import { TextField } from '@mui/material';
import { Grid } from '@mui/material';
import { Box } from '@mui/system'
import { ThemeProvider } from '@mui/material';
import PitchforkButton from './button';

interface GridTextFieldProps {
  label: string;
}

const GridTextField: React.FC<GridTextFieldProps> = ({ label }) => (
  <Grid item xs={12} sm={6} md={6}>
    <TextField label={label} fullWidth />
  </Grid>
);

const ReservationForm = () => {
  return (
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <GridTextField label="First Name" />
            <GridTextField label="Last Name" />
            <GridTextField label="Email" />
            <GridTextField label="Phone Number" />
            <Grid item xs={12}>
                <PitchforkButton>Submit</PitchforkButton>
            </Grid>
          </Grid>
        </Box>
      </LocalizationProvider>
    </div>
  );
};

export default ReservationForm;