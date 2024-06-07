import './library.css';

// import React from 'react';

// import MenuIcon from '@mui/icons-material/Menu';

import { Link } from '@mui/material';


// import { Container, Paper, Grid, Card, CardMedia, CardContent, Typography, Link,
//          IconButton, TextField, InputAdornment, Menu, MenuItem, Tab, Tabs,
//          Button
//        } from '@mui/material';

// import Box from '@mui/material/Box';

/*

export function Header2({dishId, execStatus, startTime, duration}) {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const elapsed = execStatus == "DOING" ? (Math.floor(Date.now() / 1000 - startTime)) : null

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (<>

    <AppBar position="fixed" >
      <Toolbar >
        <IconButton onClick={handleClick} edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" >
          <Link href="#/" >
            <div style={{ height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <img src="images/spixer_logo1_transparent.png" style={{color: "#e47303", height: "100%"}} />
            </div>
          </Link>
        </Typography>

          <Tabs
            value={false}
            // indicatorColor="primary"
            textColor="white"
          >
            <Tab component="a" to="#/" />
            <Tab label="Food Safety" component="a"  to="#/food_safety" />
            <Tab label="Waitlist" component="a"  to="#/join_waitlist" />
          </Tabs>
          <Button color="inherit">Login</Button>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 700 }}>
            Login2
          </Typography>

      </Toolbar>

      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose} href="#/" component="a">
          Home
        </MenuItem>
        <MenuItem onClick={handleClose} href="#/join_waitlist" component="a" >
          Join Waitlist
        </MenuItem>
        <MenuItem onClick={handleClose} href="#/food_safety" component="a" >
          Food Safety
        </MenuItem>
      </Menu>
    </AppBar>
    <div style={{height: "55px"}} ></div>
  </>);
}

*/



import * as React from 'react';
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


function Logo({sx}) {

  return (<>

    <Typography
      variant="h5"
      noWrap
      component="a"
      href="#/"
      sx={{
        mr: 2,
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
        ...sx
      }}
    >
      <div style={{ height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <img src="images/spixer_logo1_transparent.png" style={{color: "#e47303", height: "100%"}} />
      </div>
    </Typography>

  </>);
}


export function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const pages = [{name: 'Food Safety', link: "#/"},
                 {name: 'Join Waitlist', target: "_blank", link: "https://forms.gle/qRPwh8fyKWfq9TUm7"}];

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters >
          <Logo sx={{display: { xs: 'none', md: 'flex' }}} />
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}
                          component={Link} href={page.link} target={page.target} >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Logo sx={{display: { xs: 'flex', md: 'none' }, flexGrow: 1}} />

          <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 0 }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                component={Link}
                href={page.link}
                target={page.target}
                sx={{ my: 2, mx: 1, color: 'white', display: 'block', fontWeight: 700 }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}
