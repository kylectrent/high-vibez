import React from 'react';
import Badge from '@mui/material/Badge';
import Image from 'next/image';

const CartIcon = () => {
  return (
    <Badge badgeContent={4} color="secondary">
      <Image
        src="./assets/shared/desktop/icon-cart.svg"
        alt="cart"
        width={40}
        height={10}
      />
    </Badge>
  );
};

export default CartIcon;
