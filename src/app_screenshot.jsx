import React from 'react';
import { Box, styled } from '@mui/material';

const PhoneFrame = styled(Box)(({ theme }) => ({
  width: '300px', // typical phone width
  height: '600px', // typical phone height
  border: '20px solid black', // border thickness
  borderRadius: '20px', // rounded corners to mimic a phone
  borderTopWidth: '35px', // thicker top border for the camera notch
  padding: '0px', // inner padding to create screen margin
  boxSizing: 'border-box',
  backgroundColor: '#fff',
  position: 'relative',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
}));

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

export const AppScreenshot = ({ src }) => {
  return (
    <PhoneFrame>
      <Notch />
      <Screen>
        <img src={src} alt="App Screenshot" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </Screen>
    </PhoneFrame>
  );
};

