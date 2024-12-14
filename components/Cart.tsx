import { Box, Typography } from '@mui/material';
import React from 'react';
import { Button } from './Button';

export const Cart = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        height: '100vh',
        width: '100vw',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: 1301, // Ensure it's above other elements (such as MUI buttons, which have z-index of 1300, box does not have z-index in mui lib)
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          right: 100,
          minHeight: '10vh',
          minWidth: '20vw',
          backgroundColor: 'white',
          color: 'black',
          padding: '2rem',
          textTransform: 'uppercase',
          zIndex: 1301, // Ensure it's above other elements (such as MUI buttons, which have z-index of 1300, box does not have z-index in mui lib)
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography>Cart</Typography>
          <Typography>Remove All</Typography>
        </Box>
        <Box>Products</Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography>Total</Typography>
          <Typography>$$$</Typography>
        </Box>
        <Button variant="contained" color="#59a46f" sx={{ width: '100%' }}>
          Checkout
        </Button>
      </Box>
    </Box>
  );
};
