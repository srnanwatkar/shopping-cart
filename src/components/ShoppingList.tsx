import {
  Card,
  Grid, IconButton, TextField, Typography
} from '@mui/material';
import React, { useMemo } from 'react';
import { inCartAtom, shoppingListAtom, type ShoppingItemType } from '../store/atoms';
import { useAtom } from 'jotai';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Operation } from '../utils/constants';

export type HandleCartType = {
  operation: string;
  shoppingItem: ShoppingItemType;
};

const ShoppingList: React.FC = () => {

  const [shoppingList] = useAtom(shoppingListAtom);
  const [inCart, setInCart] = useAtom(inCartAtom);

  const handleCartOperation = ({ shoppingItem, operation }: HandleCartType) => {

    let inCartItems = inCart;

    if (operation === Operation.ADD_IN_CART) {
      if (inCartItems[shoppingItem.itemCode]) {
        inCartItems[shoppingItem.itemCode] = {
          ...inCartItems[shoppingItem.itemCode],
          count: inCartItems[shoppingItem.itemCode].count + 1,
        }
      } else {
        inCartItems[shoppingItem.itemCode] = {
          count: 1,
          price: shoppingItem.price,
          itemName: shoppingItem.itemName,
          offerCode: shoppingItem.offerCode
        }
      }
    } else {
      const itemCount = inCartItems[shoppingItem.itemCode].count - 1;

      if (itemCount === 0) {
        delete inCartItems[shoppingItem.itemCode];
      } else {
        inCartItems[shoppingItem.itemCode] = {
          ...inCartItems[shoppingItem.itemCode],
          count: itemCount,
        }
      }
    }

    setInCart({ ...inCartItems });
  }

  const getShoppinListCard = useMemo(() => (
    shoppingList && shoppingList.items.map((shoppingItem) => (
      <Card
        className='shopping-item'
        key={shoppingItem.itemCode}
        sx={{
          minWidth: '240px',
          mr: '18px',
          mb: '18px',
          minHeight: '140px',
          p: "8px",
          position: 'relative'
        }}>
        <Typography variant='h6'>{shoppingItem.itemName}</Typography>
        <Typography variant='body2'>Price: {shoppingItem.price}</Typography>
        {shoppingItem.offerCode && <Typography variant='caption'>Offer: {shoppingItem.offerLabel}</Typography>}
        <Grid
          container
          className="shopping-list-action-container"
          sx={{
            position: 'absolute',
            bottom: '12px',
            display: 'flex',
            width: 'calc(100% - 16px)',
            justifyContent: 'space-between'
          }}>

          <IconButton
            aria-label="remove"
            color="info"
            disabled={!inCart[shoppingItem.itemCode]}
            onClick={() => handleCartOperation({
              operation: Operation.REMOVE_FROM_CART,
              shoppingItem
            })} >
            <RemoveIcon />
          </IconButton>
          <TextField
            className='shopping-item-quantity'
            variant="outlined"
            value={inCart[shoppingItem.itemCode] ? inCart[shoppingItem.itemCode].count : 0}
            sx={{
              'input': {
                height: '24px',
                p: '8px 12px'
              },
              maxWidth: '80px'
            }}
          />
          <IconButton
            aria-label="add"
            color="info"
            onClick={() => handleCartOperation({
              operation: Operation.ADD_IN_CART,
              shoppingItem
            })} >
            <AddIcon />
          </IconButton>

        </Grid>
      </Card>
    ))
  ), [shoppingList, inCart])

  return (
    <Grid
      container
      className='shopping-list-container'
      sx={{ maxWidth: '70%' }}
    >
      {getShoppinListCard}
    </Grid >
  );
};

export default ShoppingList;
