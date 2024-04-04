import HomeLayout from "@/app/home-layout"
import React from "react"
import { styled } from '@mui/material/styles'
import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import Item from '@mui/material/Grid';
import HomeSlider from "@/components/home/HomeSlider"
import Locations from "@/components/home/locations"
import PhoneIcon from '@mui/icons-material/Phone';
import Link from "next/link"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function HomePage() {
  return (
    <HomeLayout>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={12} md={12}>
          <HomeSlider />
        </Grid>
        <br/>
        <br/>
        <Grid item xs={12} sm={12} md={6}>
          <h2>Call Us</h2>
          <Item id='contact' className='flex'>
          <h4><Link href='+16364992003'>(636) 499 2003</Link></h4>
          </Item>
          <br />
          <h2>Hours</h2>
          <Item id='hours'>
            <p>Monday - Thursday: 7:00am - 9:00pm</p>
            <p>Friday - Sunday: 7:00am - 10:00pm</p>
          </Item>
          <br />
          <h2>Follow Us!</h2>
          <Item className='flex gap-6'>
            <Link href="https://www.facebook.com"><FacebookIcon /></Link>
            <Link href="https://www.instagram.com"><InstagramIcon /></Link>
          </Item>
          <br />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Item id='locations'>
            <h2>Location</h2>
            <Locations />
          </Item>
        </Grid>
      </Grid>
    </HomeLayout>
  )
}