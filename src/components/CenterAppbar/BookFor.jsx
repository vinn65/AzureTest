import React from 'react'
import ChatIcon from '@mui/icons-material/Chat';
import {
  Box,
  Button,
  Menu,
  MenuItem
} from '@mui/material'

export default function BookFor({ styles }) {
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handelClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handelClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <Button
        style={{ ...styles.button, width: '50%' }}
        onClick={handelClick}
      >
        3 adults - 0 children - 2 rooms
      </Button>
      <Box>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handelClose}
          PaperProps={{
            style: {
              maxHeight: '250px',
              width: '300px',
              justifyContent: 'center',
            },
          }}
          >
          <MenuItem style={{height:'40px'}} onClick={handelClose}>1 adults - 0 children - 1 rooms <ChatIcon style={{marginLeft:'20px'}}/></MenuItem>
          <MenuItem style={{height:'40px'}} onClick={handelClose}>2 adults - 1 children - 1 rooms <ChatIcon style={{marginLeft:'20px'}}/></MenuItem>
          <MenuItem style={{height:'40px'}} onClick={handelClose}>3 adults - 2 children - 2 rooms <ChatIcon style={{marginLeft:'20px'}}/></MenuItem>
          <MenuItem style={{height:'40px'}} onClick={handelClose}>4 adults - 3 children - 2 rooms <ChatIcon style={{marginLeft:'20px'}}/></MenuItem>
          <MenuItem style={{marginLeft:'120px',height:'40px', width:'60px', justifyContent:'center'}} sel onClick={handelClose}>
            <Button variant='outlined'>Done</Button>
          </MenuItem>
        </Menu>
      </Box>
    </>
  )
}
