import { Box, Button, Typography } from '@mui/material';
import React from 'react';

const ProductCounter = () => {
  const [count, setCount] = React.useState(0);
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };
  const decrement = () => {
    setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
  };
  return (
    <Box>
      <Button onClick={decrement}>
        <Typography variant="h4">-</Typography>
      </Button>
      {count}
      <Button onClick={increment}>
        <Typography variant="h5">+</Typography>
      </Button>
    </Box>
  );
};

export default ProductCounter;
