import { Grid, Typography } from '@mui/material';
import React from 'react';

const Header: React.FC = () => {
  return (
    <Grid className='brand-header-container'
      sx={{
        minHeight: '40px',
        display: 'flex',
        justifyContent: 'space-between',
        p: '12px 18px',
        alignItems: 'center',
        color: 'white',
        background: '#14426a',
        filter: 'drop-shadow(10px 8px 6px #d6cfc7)'
      }}
    >
      <Typography className='brand-header shopping-brand-name' variant='h6'>
        Shopping Cart
      </Typography>
      <Typography className='brand-header brand-action-container' variant='body1'>
        Welcome User
      </Typography>
    </Grid>);
};

export default Header;