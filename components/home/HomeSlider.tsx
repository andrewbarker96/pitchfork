import React from "react"
import { styled } from '@mui/material/styles'
import { Grid } from '@mui/material'
import Item from '@mui/material/Grid';
import { Box } from '@mui/system'
import Link from "next/link";

import { StaticImageData } from 'next/image' // Import the StaticImageData type
import PitchforkButton from "../button"
import { Home } from "@mui/icons-material";

const BlackButton = styled(PitchforkButton)`
  background-color: black;
  color: white;
  border: 2px solid white;
  drop-shadow: None;
`;


interface HomeButtonProps {
  title: string;
  src: string;
}

const HomeButtons: React.FC<HomeButtonProps> = ({ title, src }) => (
    <BlackButton><Link href={src}>{title}</Link></BlackButton>
);

export default function HomeSlider() {
    return (
      <>
        <Grid container spacing={2} className ='home-container flex justify-center'>
          <Grid item xs={12} sm={12} md={12}>
            <Item className = 'flex justify-center'>
                <img src='pitchfork-home.png' alt='Pitchfork Eatery' style={{width:'500px'}}/>
            </Item>
          </Grid>
          <br />
          <Grid item xs={12} sm={12} md={12} className='flex flex-wrap gap-4 justify-center' style={{marginTop:'5%'}}>
            <HomeButtons title="Seasonal Items" src="/menu#new-items" />
            <HomeButtons title="Menu" src="/menu#full-menu" />
            <HomeButtons title="Order Online" src="/#" />
            <HomeButtons title="Get In Line" src="/waitlist" />
            <HomeButtons title="Contact Us" src="/#contact" />
            <HomeButtons title="Locations" src="/#locations" />
            <HomeButtons title="Hours" src="/#hours" />
          </Grid>
        </Grid>
      </>
    )
  }
