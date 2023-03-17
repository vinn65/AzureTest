import React from 'react'
import Image from '../assets/background.jpg'

export default function BackgroundImage() {
    const styles = {
        backgroundDiv: {
            height: '100vh',
            width: '100vw',
            backgroundImage: `url(${Image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            // position: 'fixed',
            zIndex: '-1',
            opacity: '0.9',
            backgroundColor: 'black'
        }
    }
    return (
        <>
            <div style={styles.backgroundDiv}>
            </div>
        </>
    )
}
