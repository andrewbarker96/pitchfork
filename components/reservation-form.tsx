import React from 'react'
import { FormEvent } from 'react'
import { DateCalendar } from '@mui/x-date-pickers'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';

const ReservationForm = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div><DateCalendar /></div>
    </LocalizationProvider>
  )
}

export default ReservationForm