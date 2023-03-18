import { CategoryItem } from "../categories/category.types";
import { CART_ACTIONS_TYPE, CartItem } from "./cart.types";
import { createAction, withMatcher, Action, ActionWithPayload } from "../../utils/reducer/reducer.utils";

function addCartItem(cartItems: CartItem[], productToAdd: CategoryItem): CartItem[] {
  const existingCartItem = cartItems.find((cartItem) => {
    return cartItem.id === productToAdd.id;
  });

  if (existingCartItem) {
    return cartItems.map((cartItem) => (cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
}

function removeCartItem(cartItems: CartItem[], cartItemToRemove: CartItem): CartItem[] {
  const existingCartItem = cartItems.find((cartItem) => {
    return cartItem.id === cartItemToRemove.id;
  });

  if (existingCartItem?.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== existingCartItem.id);
  }

  return cartItems.map((cartItem) => (cartItem.id === cartItemToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem));
}

function clearCartItem(cartItems: CartItem[], cartItemToClearId: number): CartItem[] {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClearId);
}

export type SetIsCartOpen = ActionWithPayload<CART_ACTIONS_TYPE.SET_CART_OPEN, boolean>;
export type SetCartItems = ActionWithPayload<CART_ACTIONS_TYPE.SET_CART_ITEMS, CartItem[]>;

export const setIsCartOpen = withMatcher((boolean: boolean): SetIsCartOpen => createAction(CART_ACTIONS_TYPE.SET_CART_OPEN, boolean));
export const setCartItems = withMatcher((cartItems: CartItem[]): SetCartItems => createAction(CART_ACTIONS_TYPE.SET_CART_ITEMS, cartItems));

export function addItemToCart(cartItems: CartItem[], productToAdd: CategoryItem) {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return setCartItems(newCartItems);
}

export function removeItemFromCart(cartItems: CartItem[], cartItemToRemove: CartItem) {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return setCartItems(newCartItems);
}

export function clearItemFromCart(cartItems: CartItem[], cartItemToClearId: number) {
  const newCartItems = clearCartItem(cartItems, cartItemToClearId);
  return setCartItems(newCartItems);
}
