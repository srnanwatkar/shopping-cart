import { atom } from "jotai"

export interface ShoppingItemType {
  itemCode: string;
  itemName: string;
  offerCode: string | null;
  offerLabel: string;
  price: number;
}

export interface ShoppingListType {
  items: ShoppingItemType[];
}

export interface CartList {
  [key: string]: {
    price: number;
    count: number;
    itemName: string;
    offerCode?: string | null;
  }
}

export const shoppingListAtom = atom<ShoppingListType | null>(null);

export const inCartAtom = atom<CartList>({});