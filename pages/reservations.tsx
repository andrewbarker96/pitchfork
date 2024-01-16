import React from 'react'
import RootLayout from '@/app/layout'
import ReservationForm from '@/components/reservation-form'
import Link from 'next/link'
import { styled } from '@mui/material/styles'
import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import Paper from '@mui/material/Paper'

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  boxShadow: 'none',
}));

const reservations = () => {
  return (
    <RootLayout>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
            <Item>
              <ReservationForm />
            </Item>
        </Grid>
        <Grid item xs={6}>
            <Item>        
              <h1>No times available?</h1>
              <h2>Call us at <Link href="tel:+15555555555" style = {{color: 'blue'}}>555-555-5555</Link> to make a reservation!</h2>
            </Item>
        </Grid>
      </Grid>
    </Box>
        
      <div>
        <h1>Make a Reservation!</h1>
        <ReservationForm />
      </div>
      <br></br>
      <div>
      </div>
    </RootLayout>
  )
}

export default reservations