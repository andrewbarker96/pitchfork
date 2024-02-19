import React, { useState, useEffect } from 'react'
import RootLayout from '@/app/layout'
import WaitlistForm from '@/components/waitlist'
import Link from 'next/link'
import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WaitlistView from '@/components/waitlist-view'

const WaitlistAdmin = () => {
    return (
        <RootLayout>
                <WaitlistView />
        </RootLayout>
    );
}

export default WaitlistAdmin;
