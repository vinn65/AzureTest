import { Typography, Link, Divider, Stack } from '@mui/material'
import React from 'react'
import GMapView from './GMapView.jsx'

export default function HotelDetainsView() {
    return (
        <>
            <Stack justifyContent="space-between" direction={{xs:'col', md:'row'}}>
                <div>
                    <Typography variant='h5' sx={{ fontWeight: 'bold' }}>Hotel Vishal @Airport</Typography>
                    <Typography>104/2/2, Nehru Place, National Highway <Link>View More</Link></Typography>
                    <Typography>New Delhi, 600036, India </Typography>
                    <Typography style={{ padding: '15px 0' }}>Phone: +91 11 4567 8900</Typography>
                    <Typography style={{ padding: '0 0 10px 0' }}>•ATM  •Hospital  •Airport  •Train</Typography>
                </div>
                <div>
                    <GMapView />
                </div>
            </Stack>
            <Typography align='justify'>
                Lorem Ipsum dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </Typography>
            <Divider style={{ margin: '40px 0' }} />
            <div><Typography varient='h6' sx={{ fontWeight: 'bold' }}>Property Rules</Typography></div>
            <div><Typography>Checkin 12 PM, Checkout 12 PM</Typography></div>
            <Stack direction='row' spacing={2}>
                <ul>
                    <li>No Smoking</li>
                    <li>No Alcohol</li>
                    <li>No Pets</li>
                    <li>No Parties</li>
                    <li>No Loud Music</li>
                    <li>Banquet Halls avaiable with prior booking only</li>
                    <li>Outside food not allowed</li>
                    <li>Proper room hygine must be maintained</li>
                    <li>Guests must be 18 years or older to check-in</li>
                    <li>Government ID cards must</li>
                </ul>

                <ul>
                    <li>Banquet Halls avaiable with prior booking only</li>
                    <li>Outside food not allowed</li>
                    <li>Proper room hygine must be maintained</li>
                    <li>Guests must be 18 years or older to check-in</li>
                    <li>Government ID cards must</li>
                </ul>
            </Stack>
        </>
    )
}
