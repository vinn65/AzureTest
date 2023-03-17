import React from 'react'
import ImageView from './HotelDetails/ImageView.jsx'
import HotelDetainsView from './HotelDetails/HotelDetainsView.jsx'

export default function HotelDetails() {
  const styles = {
    images: {
      width: '70%',
      margin: '40px auto',
      borderRadius: '10px',
    }
  }
  return (
    <>
      <div style={styles.images}>
        <ImageView />
        <HotelDetainsView />
      </div>

    </>
  )
}
