import { Box } from '@mui/material';
import React from 'react';

export const Cart = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        height: '100vh',
        width: '100vw',
        backgroundColor: 'rgba(255, 0, 0, 0.5)',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          right: 300,
          minHeight: '20vh',
          minWidth: '50vw',
          backgroundColor: 'white',
        }}
      ></Box>
    </Box>
  );
};
