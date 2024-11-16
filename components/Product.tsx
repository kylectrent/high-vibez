'use client';

import React from 'react';
import Box from '@mui/material/Box';
import Image from 'next/image';
import { Container } from '@mui/material';
import ProductCounter from './ProductCounter';
import { Button } from './Button';

interface ProductProps {
  src: string;
  alt: string;
  name: string;
}

export const Product = (productProps: ProductProps) => {
  const { src, alt, name } = productProps;
  return (
    <Container>
      <Box sx={{ display: 'flex', justifyContent: 'space-evenly' }}>
        <Image src={src} width={500} height={500} alt={alt}></Image>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <h1>{name}</h1>
          <ProductCounter />
          <Button variant="contained" color="#59a46f">
            Add To Cart
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
