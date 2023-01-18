import { CART_ACTIONS_TYPE } from "./cart.types";
import { createAction } from "../../utils/reducer/reducer.utils";

export const setIsCartOpen = (boolean) => createAction(CART_ACTIONS_TYPE.SET_CART_OPEN, boolean);

export function addItemToCart(cartItems, productToAdd) {
  const newCartItems = addCartItem(cartItems, productToAdd);
  return createAction(CART_ACTIONS_TYPE.SET_CART_ITEMS, newCartItems);
}

export function removeItemFromCart(cartItems, cartItemToRemove) {
  const newCartItems = removeCartItem(cartItems, cartItemToRemove);
  return createAction(CART_ACTIONS_TYPE.SET_CART_ITEMS, newCartItems);
}

export function clearItemFromCart(cartItems, cartItemToClearId) {
  const newCartItems = clearCartItem(cartItems, cartItemToClearId);
  return createAction(CART_ACTIONS_TYPE.SET_CART_ITEMS, newCartItems);
}

function addCartItem(cartItems, productToAdd) {
  const existingCartItem = cartItems.find((cartItem) => {
    return cartItem.id === productToAdd.id;
  });

  if (existingCartItem) {
    return cartItems.map((cartItem) => (cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem));
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
}

function removeCartItem(cartItems, cartItemToRemove) {
  const existingCartItem = cartItems.find((cartItem) => {
    return cartItem.id === cartItemToRemove.id;
  });

  if (existingCartItem) {
    if (existingCartItem.quantity === 1) {
      return cartItems.filter((cartItem) => cartItem.id !== existingCartItem.id);
    }

    return cartItems.map((cartItem) => (cartItem.id === existingCartItem.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem));
  }
}

function clearCartItem(cartItems, cartItemToClearId) {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToClearId);
}
