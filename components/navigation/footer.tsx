import React from 'react';
import Link from 'next/link';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import Paper from '@mui/material/Paper';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';


const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    boxShadow: 'none',
}));

const Footer = () => {
    return (
        <Box>
            <Grid container spacing={2} className = 'footer justify-center align-middle'>
                <Grid item xs={12} sm={6} md={4} className = 'footer-item'>
                    <div><Link href="/menu">Menu</Link></div>
                    <div><Link href="/contact">Contact Us</Link></div>
                    <div><Link href="/reservations">Join the Waitlist</Link></div>
                </Grid>
                <Grid item xs={12} sm={6} md={4} className = 'footer-item'>
                    <div><Link href="#">Terms of Use</Link></div>
                    <div><Link href="#">Privacy Policy</Link></div>
                    <div><Link href="#">Cookie Policy</Link></div>
                </Grid>
                <Grid item xs={12} sm={12} md={4} className = 'footer-item'>
                    <Link href="https:www.facebook.com"><FacebookIcon /></Link>
                    <Link href="https:www.instagram.com"><InstagramIcon /></Link>
                </Grid>
            </Grid>
            <Grid container spacing = {2} className = 'copyright'>
                <Grid item xs={12} sm={12} md={12}>
                    <div>© 2024 <Link href='/'>Pitchfork Eatery</Link></div>
                    <div>123 Main Street, St. Louis, MO, 63011</div>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Footer