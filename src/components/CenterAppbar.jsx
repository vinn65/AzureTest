import React from 'react'
import CheckIn from './CenterAppbar/CheckIn.jsx'
import CheckOut from './CenterAppbar/CheckOut.jsx'
import BookFor from './CenterAppbar/BookFor.jsx'

import {
    Stack,
    Divider,
    Button
} from '@mui/material'

export default function CenterAppbar() {
    const styles = {
        responsiveStack: {
            width: '70%',
            maxWidth: '900px',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        },
        rowStack: {
            width: '100%',
            maxWidth: '650px',
            padding: '0px',
            backgroundColor: 'white',
            borderRadius: '10px',
        },
        mainButton: {
            width: '350px',
            backgroundColor: '#FFDB58',
            color: 'black',
            borderRadius: '10px',
            height: '70px',
            margin: '10px 0 10px 10px',
        },
        button: {
            padding: '22px 10px 22px 10px',
            color: 'black',
            borderRadius: '0px',
        }
    }
    return (
        <>
            <Stack style={styles.responsiveStack} direction={{ xs: 'col', md: 'row' }} spacing={2}
                justifyContent={{ xs: 'center', md: 'space-between' }} alignItems={{ xs: 'center', md: 'center' }}
            >
                <Stack
                    divider={<Divider orientation="vertical" flexItem />}
                    direction="row"
                    style={styles.rowStack}>
                    <CheckIn sx={1} styles={styles} />
                    <CheckOut sx={1} styles={styles} />
                    <BookFor sx={2} styles={styles} />
                </Stack>
                    <Button variant='contained' style={styles.mainButton}>
                        Check Availability
                    </Button>
            </Stack>
        </>
    )
}
