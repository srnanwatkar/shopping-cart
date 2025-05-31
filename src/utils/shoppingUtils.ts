import type { CartList } from "../store/atoms";
import { OfferCode } from "./constants";

export const getOfferApplied = ({ count, offerCode }: { count: number, offerCode: string | null }) => {
  switch (offerCode) {
    case OfferCode.BUY_1_GET_1:
      return count >= 1;
    case OfferCode.BUY_3_FOR_2:
      return count >= 3;
  }
}

export const getShoppingCartTotal = ({ items }: { items: CartList }) => {
  let shoppingTotal = 0;
  Object.keys(items).forEach((key) => {
    const shopItem = items[key];
    if (shopItem.offerCode && shopItem.offerCode === OfferCode.BUY_3_FOR_2) {
      if (shopItem.count % 3 === 0) {
        shoppingTotal += ((shopItem.count - (shopItem.count / 3)) * shopItem.price);
      } else {
        if (Math.ceil(shopItem.count / 3) < 1) {
          shoppingTotal += shopItem.count * shopItem.price;
        } else if (Math.ceil(shopItem.count / 3) > 0) {
          const offerCount = Math.ceil(shopItem.count / 3);
          const normalCount = shopItem.count % 3;
          shoppingTotal += (normalCount * shopItem.price) + ((offerCount - (offerCount / 3)) * shopItem.price)
        }
      }
    } else {
      shoppingTotal += shopItem.count * shopItem.price;
    }
  });

  return shoppingTotal;
}