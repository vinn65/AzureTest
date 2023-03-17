import React from 'react'
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import dayjs from 'dayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import {
  Box,
  Button,
  Menu,
  TextField
} from '@mui/material'

export default function CheckIn({ styles }) {
  const [value, setValue] = React.useState(dayjs('2014-08-18T21:11:54'));
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handelClick = (event) => {
    console.log('handelClick')
    setAnchorEl(event.currentTarget)
  }
  const handelClose = () => {
    setAnchorEl(null)
  }
  const handelDateChange = (newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Button
        style={{ ...styles.button, width: '25%' }}
        onClick={handelClick}>
        <CalendarMonthRoundedIcon style={{ padding: '0px 5px 0px 5px' }} />
        Check In
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handelClose}
        PaperProps={{
          style: {
            margin : 0,
            padding : '10px 20px 10px 20px',
            width:'200px'
          },
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            label="Choose Date"
            inputFormat="MM/DD/YYYY"
            value={value}
            onChange={handelDateChange}
            renderInput={(params) => <TextField variant='standard' {...params} />}
          />
        </LocalizationProvider>
      </Menu>
    </>
  )
}
