import './main.css';
import {Header} from './header';
import React from 'react';
import {api} from './library';

import {DishCards} from './dish_cards'

import {AppScreenshot} from './app_screenshot'
import {spixerTheme, configs} from './configs'


import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

import { Container, Grid, Typography, Button, Card, CardMedia, CardContent, Paper,
         Stack, Box} from '@mui/material';


const AspectRatioBox = ({ ratio, children, ...props }) => {
  const paddingBottom = `${(1 / ratio) * 100}%`; // Calculate the padding-bottom based on the ratio

  return (
    <Box
      {...props}
      sx={{
        position: 'relative',
        width: '100%',
        paddingBottom,
        overflow: 'hidden',
        '& > *': {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        },
      }}
    >
      {children}
    </Box>
  );
}



export function Main() {

  const screenshots = ["images/app_home_page_screenshot_mid.png", "images/chilli_paneer_screenshot_mid.png", "images/screenshot_paneer_dispensing_mid.png", "images/screenshot_edit_salt_mid.png"]

  const isSmallScreen = useMediaQuery(spixerTheme.breakpoints.down('lg'))

  return (<>
    <Header />

    <Paper elevation={3} style={{ backgroundColor: '#ffffff', padding: "50px 0px" }}>
      <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center', textAlign: 'center'}} >

        <Typography variant="h3" style={{ fontWeight: 'bold', margin: "30px", fontSize: configs.textSizeTitle}}  >
          Welcome to Spixer, Robotic Cooking Machine
        </Typography>

        <Typography variant="body1" style={{fontSize: configs.textSizeSmall, margin: "0px 0px"}} >
          Save 30 minutes of your cooking time, every single day
        </Typography>
      </Container>
    </Paper>


    <Paper elevation={3} style={{ backgroundColor: '#f9f9f9', padding: "50px 0px" }}>
      <Container maxWidth="xl">
          <Box sx={{ display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>
            <Typography variant="h3" style={{ fontWeight: 'bold', marginBottom: "30px", fontSize: configs.textSizeTitle}} >
              How does it work ?
            </Typography>

            <Typography variant="body1" style={{fontSize: configs.textSizeSmall, marginBottom: "30px"}} >
              Search your favorite recipe, Fill Box1/Box2 and Press 'Start'.
            </Typography>

            <Grid container justifyContent="center">
              <Grid item xs={12} sm={12} md={12} lg={9}>
                  <AspectRatioBox ratio={16 / 9}>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/_X6NEAkRlAU?si=aoRpwvg4gR3t4kp2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                  </AspectRatioBox>
              </Grid>
            </Grid>
          </Box>
  
      </Container>
    </Paper>

    <Paper elevation={3} style={{ backgroundColor: '#ffffff', padding: "50px 0px" }}>
      <Container maxWidth="xl">
          <Box sx={{ display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center', textAlign: 'center'}}>

            <Typography variant="h3" style={{ fontWeight: 'bold', marginBottom: "50px", fontSize: configs.textSizeTitle}} >
              Control With Spixer App
            </Typography>


              <Box sx={{ width: '100%', overflow: 'auto', alignItems: (isSmallScreen ? 'stretch' : 'center'), justifyContent: 'center', display: 'flex', flexDirection: "column" }}>
                <Stack spacing={2}  direction="row" sx={{ minWidth: 'max-content', marginBottom: '20px' }} >
                  {screenshots.map(image => (
                    <AppScreenshot src={image} />
                  ))}
                </Stack>
              </Box>
        </Box>
      </Container>
    </Paper>


    <Paper elevation={3} style={{ backgroundColor: '#ffffff', padding: "50px 0px" }}>
      <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: "column", alignItems: 'center', justifyContent: 'center', textAlign: 'center'}} >
        <Typography variant="h3" style={{ fontWeight: 'bold', marginBottom: "30px", fontSize: configs.textSizeTitle}}>
          Contact Us
        </Typography>

        <Typography variant="body1" style={{fontSize: configs.textSizeSmall, marginBottom: "30px"}} >
          Have any questions? Feel free to reach out to us at: <b>mohitsaini1196@gmail.com</b>
        </Typography>

      </Container>
    </Paper>




        <footer style={{ backgroundColor: '#282c34', padding: '10px', color: 'white', textAlign: 'center' }}>
          <Typography variant="body2" >
            &copy; 2024 Spixer. All rights reserved.
          </Typography>
        </footer>

  </>);
}
