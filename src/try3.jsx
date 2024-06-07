import React from 'react';
import { styled } from '@mui/material';


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Products', 'Pricing', 'Blog'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];


function Logo() {
  return (<>
    <div style={{ height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <img src="images/spixer_logo1_transparent.png" style={{color: "#e47303", height: "100%"}} />
    </div>
  </>);
}


// Define styles for the phone frame
const PhoneFrame = styled(Box)(({ theme }) => ({
  width: '360px', // typical phone width
  height: '720px', // typical phone height
  border: '20px solid black', // border thickness
  borderRadius: '20px', // rounded corners to mimic a phone
  borderTopWidth: '35px', // thicker top border for the camera notch
  padding: '0px', // inner padding to create screen margin
  boxSizing: 'border-box',
  backgroundColor: '#fff',
  position: 'relative',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
}));

// Define styles for the screen
const Screen = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100%',
  borderRadius: '1px', // inner rounded corners for the screen
  overflow: 'hidden',
  backgroundColor: '#000', // black background for screen
}));

const Notch = styled(Box)(({ theme }) => ({
  width: '12px',
  height: '12px',
  border: 'solid #444 2px',
  backgroundColor: '#000',
  position: 'absolute',
  top: '-25px',
  left: '50%',
  transform: 'translateX(-50%)',
  borderRadius: '50%',
}));

const AppScreenshot = ({ src }) => {
  return (
    <PhoneFrame>
      <Notch />
      <Screen>
        <img src={src} alt="App Screenshot" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </Screen>
    </PhoneFrame>
  );
};




export const Try3 = () => {
  return (

<Toolbar disableGutters>
  <Typography
    variant="h6"
    noWrap
    component="a"
    href="#app-bar-with-responsive-menu"
    sx={{
      mr: 2,
      display: { xs: 'none', md: 'flex' },
      fontFamily: 'monospace',
      fontWeight: 700,
      letterSpacing: '.3rem',
      color: 'inherit',
      textDecoration: 'none',
      flexGrow: 1,
    }}
  >
    <Logo />
  </Typography>

  <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
    <IconButton
      size="large"
      aria-label="account of current user"
      aria-controls="menu-appbar"
      aria-haspopup="true"
      color="inherit"
    >
      <MenuIcon />
    </IconButton>
    <Menu
      id="menu-appbar"
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      sx={{
        display: { xs: 'block', md: 'none' },
      }}
    >
      {pages.map((page) => (
        <MenuItem key={page} >
          <Typography textAlign="center">{page}</Typography>
        </MenuItem>
      ))}
    </Menu>
  </Box>

  <Typography
    variant="h5"
    noWrap
    component="a"
    href="#app-bar-with-responsive-menu"
    sx={{
      mr: 2,
      display: { xs: 'flex', md: 'none' },
      flexGrow: 1,
      fontFamily: 'monospace',
      fontWeight: 700,
      letterSpacing: '.3rem',
      color: 'inherit',
      textDecoration: 'none',
    }}
  >
    <Logo />
  </Typography>
  <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
    {pages.map((page) => (
      <Button
        key={page}
        
        sx={{ my: 2, color: 'white', display: 'block', fontWeight: 700 }}
      >
        {page}
      </Button>
    ))}
  </Box>
</Toolbar>
  );
};
