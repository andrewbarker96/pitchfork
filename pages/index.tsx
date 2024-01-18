import RootLayout from "@/app/layout"
import React from "react"
import ImagePortfolio from "@/components/image-list"
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

export default function HomePage() {
  return (
    <RootLayout>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} className = 'justify-between '>
          <Grid xs={12} sm={12} md={12}>
            <h1>Pitchfork Eatery</h1>
          </Grid>
          <Grid xs={12} sm={6} md={8} >
            <h2>Our Story</h2>
            <Item>Located in the heart of downtown, Pitchfork Eatery is a modern restaurant that serves upscale country dishes. Our menu is inspired by the rich culinary history of the South. We offer a fine dining experience in a casual atmosphere.</Item>
            <Item>Our restaurant is open for lunch and dinner, and we also offer a full-service bar with an extensive wine list.</Item>
            <Item>We look forward to seeing you soon!</Item>
          </Grid>
          <Grid xs={12} sm={12} md={4}>
            <h2>Our Food</h2>
            <ImagePortfolio />
          </Grid>
          <Grid xs={12} sm={6} md={12}>
            <h2>Hours</h2>
            <Item>
              <p>Monday: 11am - 9pm</p>
            </Item>
            <Item>
              <p>Tuesday: 11am - 9pm</p>
            </Item>
            <Item>
              <p>Wednesday: 11am - 9pm</p>
            </Item>
            <Item>
              <p>Thursday: 11am - 9pm</p>
            </Item>
            <Item>
              <p>Friday: 11am - 11pm</p>
            </Item>
            <Item>
              <p>Saturday: 11am - 11pm</p>
            </Item>
            <Item>
              <p>Sunday: 11am - 9pm</p>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </RootLayout>
  )
}