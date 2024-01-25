import React from 'react';
import Link from 'next/link';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


const FooterLinkItem: React.FC<{ links: { href: string; text: string }[] }> = ({ links }) => (
    <Grid item xs={12} sm={6} md={4} className='footer-item'>
      {links.map((link, index) => (
        <div key={index}><Link href={link.href}>{link.text}</Link></div>
      ))}
    </Grid>
  );
  
  const Footer = () => {
    return (
      <Box>
        <Grid container spacing={2} className='footer'>
          <FooterLinkItem links={[
            { href: "/menu", text: "Menu" },
            { href: "/contact", text: "Contact Us" },
            { href: "/reservations", text: "Join the Waitlist" },
          ]} />
          <FooterLinkItem links={[
            { href: "#", text: "Terms of Use" },
            { href: "#", text: "Privacy Policy" },
            { href: "#", text: "Cookie Policy" },
          ]} />
          <Grid item xs={12} sm={6} md={4} className='footer-item'>
            <Link href="https://www.facebook.com"><FacebookIcon /></Link>
            <Link href="https://www.instagram.com"><InstagramIcon /></Link>
          </Grid>
        </Grid>
        <Grid container spacing={2} className='copyright'>
          <Grid item xs={12} sm={12} md={12}>
            <div>&copy; 2024 <Link href='/'>Pitchfork Eatery</Link></div>
            <div>452 Sunflower Lane Topeka KS, 66102</div>
          </Grid>
        </Grid>
      </Box>
    )
  }

export default Footer