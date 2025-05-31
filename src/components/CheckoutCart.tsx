import { Button, Divider, Grid, Typography } from '@mui/material';
import { useAtom } from 'jotai';
import React, { useMemo } from 'react';
import { inCartAtom } from '../store/atoms';
import { getOfferApplied, getShoppingCartTotal } from '../utils/shoppingUtils';
import { OfferCode } from '../utils/constants';

const CheckoutCart: React.FC = () => {
  const [inCartItems] = useAtom(inCartAtom);

  const getItemCartValues = useMemo(() => {
    const itemKeys = Object.keys(inCartItems);

    if (itemKeys.length > 0) {
      const offerApplied: string[] = [];
      return <div style={{ marginTop: '12px' }}>
        <Typography variant='body1' sx={{ fontWeight: 600 }}>Item(s):</Typography>
        {
          itemKeys.map((key) => {
            if (getOfferApplied({ count: inCartItems[key].count, offerCode: inCartItems[key].offerCode ?? null })) {
              offerApplied.push(inCartItems[key].offerCode ?? '')
            }
            return (
              <Grid container sx={{ mt: '4px', display: 'flex', justifyContent: 'space-between' }}>
                <div className='item-name'>{inCartItems[key].itemName}</div>
                <div className='item-count'>
                  {
                    inCartItems[key].offerCode &&
                    inCartItems[key].offerCode === OfferCode.BUY_1_GET_1 &&
                    <Typography variant='caption'>{` (+ ${inCartItems[key].count})`} offer applied!</Typography>
                  }
                  {
                    inCartItems[key].offerCode &&
                    inCartItems[key].offerCode === OfferCode.BUY_3_FOR_2 &&
                    inCartItems[key].count >= 3 &&
                    <Typography variant='caption'> offer applied!</Typography>
                  }
                  {`  x ${inCartItems[key].count}`}
                </div>
              </Grid>
            )
          })
        }
        <Divider orientation='horizontal' sx={{ margin: '12px 0' }} />
        {offerApplied.length > 0 &&
          <div className='offer-container' style={{
            display: 'flex',
            justifyContent: 'space-between'
          }}>
            <Typography variant='body2' sx={{ fontSize: '12px' }}>Offer Applied:</Typography>
            <Typography variant='body2' sx={{ fontSize: '12px' }}><i>{offerApplied?.join(', ')}</i></Typography>
          </div>
        }
        <div className='offer-container' style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '8px'
        }}>
          <Typography variant='body1' sx={{ fontWeight: '600' }}>Total: </Typography>
          <Typography variant='body1'>{getShoppingCartTotal({ items: inCartItems })} </Typography>
        </div>
        <Button variant='outlined' sx={{ width: '100%', m: '64px 0px' }}>Checkout</Button>
      </div >
    }
    return <Typography variant='body2' sx={{ mt: '24px' }}> Your Cart is Empty.</Typography>
  }, [inCartItems])

  return (
    <Grid
      container
      className='shopping-cart-container'
      sx={{
        ml: '12px',
        display: 'block',
        minWidth: '25%'
      }}>
      <Typography variant='h6'>
        Your Cart
      </Typography>
      <Grid>
        {getItemCartValues}
      </Grid>
    </Grid>
  )
}

export default CheckoutCart;