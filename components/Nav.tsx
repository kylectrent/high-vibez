'use client';
import { Container } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import CartIcon from './CartIcon';
import { Cart } from './Cart';
import Button from '@mui/material/Button';

export const Nav = () => {
  const [showCart, setShowCart] = useState(false);
  const toggleCartModal = () => {
    setShowCart(!showCart);
  };
  return (
    <div>
      <Container
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Link href="./">
          <Image
            src="./assets/shared/desktop/high-vibez.svg"
            alt="logo"
            width={400}
            height={40}
          />
        </Link>

        <ul style={{ textTransform: 'uppercase', textDecoration: 'none' }}>
          <Link
            style={{ marginRight: '2rem', fontWeight: '700' }}
            href="./about"
          >
            About
          </Link>
          <Link
            style={{ marginRight: '2rem', fontWeight: '700' }}
            href="./products"
          >
            Products
          </Link>
          <Link
            style={{ marginRight: '2rem', fontWeight: '700' }}
            href="./reviews"
          >
            Reviews
          </Link>
          <Link
            style={{ marginRight: '2rem', fontWeight: '700' }}
            href="./about"
          >
            Recipes
          </Link>
        </ul>
        <Button onClick={toggleCartModal}>
          <CartIcon />
        </Button>
      </Container>
      {showCart && <Cart />}
    </div>
  );
};
