import React from "react"
import { styled } from '@mui/material/styles'
import { Grid } from '@mui/material'
import Item from '@mui/material/Grid';
import Link from "next/link";
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
    <Grid container spacing={2} className ='home-slider'>
      <Grid item xs={12} sm={12} md={12}>
        <Item className = 'flex justify-center'>
          <Link href="/#">
            <img src='PitchforkHome.png' alt='Pitchfork Eatery' style={{width:'500px'}}/>
          </Link>
        </Item>
      </Grid>
      <br />
      <Grid item xs={12} sm={12} md={12} className='flex flex-wrap gap-6 justify-center' style={{marginTop:'2.5%', marginBottom:'2.5%'}}>
        <HomeButtons title="Menu" src="/menu#full-menu" />
        <HomeButtons title="Seasonal Items" src="/menu#new-items" />
        <HomeButtons title="Order Online" src="#" />
        <HomeButtons title="Join the Waitlist" src="/waitlist" />
        {/* <HomeButtons title="Contact Us" src="/#contact" />
        <HomeButtons title="Locations" src="/#locations" />
        <HomeButtons title="Hours" src="/#hours" /> */}
      </Grid>
    </Grid>
    )
  }
