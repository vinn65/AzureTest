import { useState } from 'react'
import Appbar from './components/Appbar.jsx'
import BackgroundImage from './components/BackgroundImage.jsx'
import CenterAppbar from './components/CenterAppbar.jsx'
import HotelDetails from './components/HotelDetails.jsx'

function App() {

  return (
    <>
      <Appbar />
      <BackgroundImage />
      <CenterAppbar />
      <HotelDetails />
    </>
  )
}

export default App
