import React, { useState, useEffect } from 'react'
import RootLayout from '@/app/layout'
import ReservationForm from '@/components/reservation-form'
import Link from 'next/link'
import { styled } from '@mui/material/styles'
import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import Paper from '@mui/material/Paper'
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  boxShadow: 'none',
}));

const Reservations = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const min = 10;
    const max = 60;
    const randomTime = Math.floor(Math.random() * (max - min + 1)) + min;
    setTime(randomTime);
  }, []);

  return (
    <RootLayout>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <h1>Current Wait Time</h1>
            <div className='flex gap-x-3 items-center'>
              <AccessTimeIcon />
              <h3>{time} minutes</h3>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <h2>Jump in Line Now!</h2>
            <p>Get your name on the list and skip the line!</p>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <ReservationForm />
          </Grid>
        </Grid>
      </Box>
    </RootLayout>
  );
}

export default Reservations;