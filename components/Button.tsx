import React from 'react';
import MuiButton from '@mui/material/Button';

interface Props {
  variant: 'text' | 'outlined' | 'contained';
  color: string;
  children: React.ReactNode;
}

export const Button = (props: Props) => {
  const { variant, color, children } = props;
  return (
    <MuiButton variant={variant} sx={{ background: color, width: '10rem' }}>
      {children}
    </MuiButton>
  );
};
