import { Container } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Nav = () => {
  return (
    <Container sx={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
        <Image src="./assets/shared/desktop/high-vibez.svg" alt="logo" width={400} height={40} />
        <ul style={{textTransform: "uppercase", textDecoration: "none"}}>
            <Link href="./about">About</Link>
            <Link href="./products">Products</Link>
            <Link href="./reviews">Reviews</Link>
            <Link href="./about">Recipes</Link>
        </ul>
        <Image src="./assets/shared/desktop/icon-cart.svg" alt="cart" width={40} height={10} />
    </Container>
  )
}
