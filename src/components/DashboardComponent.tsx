import React from 'react';
import ShoppingList from './ShoppingList';
import CheckoutCart from './CheckoutCart';
import { Divider, Grid } from '@mui/material';

const DashboardComponent: React.FC = () => {
  return (
    <Grid
      className='shopping-dashboard-container'
      sx={{
        margin: '18px',
        display: 'flex'
      }}>
      <ShoppingList />
      <Divider orientation='vertical' flexItem />
      <CheckoutCart />
    </Grid>
  )
}

export default DashboardComponent;