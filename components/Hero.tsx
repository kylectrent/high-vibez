import { Box, Typography } from '@mui/material';
import React from 'react';
import { Button } from './Button';

export const Hero = () => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      height={'50vh'}
      justifyContent={'center'}
    >
      <Typography
        variant="h1"
        //paddingTop={"1rem"}
        textTransform={'uppercase'}
        fontSize={'1.5rem'}
        letterSpacing={'0.5rem'}
        color="#a1ff00"
      >
        Functional Mushroom Beverages
      </Typography>
      <Typography variant="h2" fontWeight={'800'}>
        For your mouth to drink, so drink them
      </Typography>
      <Button variant="contained" color="#59a46f">
        Button
      </Button>
    </Box>
  );
};
