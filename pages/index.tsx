import RootLayout from "@/app/layout"
import React from "react"
import { styled } from '@mui/material/styles'
import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import Paper from '@mui/material/Paper'
import NewMenuItems from "@/components/menu/new-menu-items"

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  boxShadow: 'none',
}));

export default function HomePage() {
  return (
    <RootLayout>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1}>
          <h1>Whats New?</h1>
          <Grid item xs={12} sm={12} md={12}>
            <h2>Hours</h2>
            <Item>
              <p>Monday - Thursday</p>
              <p>11:00am - 9:00pm</p>
            </Item>
            <Item>
              <p>Friday</p>
              <p>11:00am - 10:00pm</p>
            </Item>
            <Item>
              <p>Saturday</p>
              <p>12:00pm - 10:00pm</p>
            </Item>
            <Item>
              <p>Sunday</p>
              <p>12:00pm - 9:00pm</p>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </RootLayout>
  )
}