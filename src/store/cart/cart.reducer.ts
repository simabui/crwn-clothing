import { AnyAction } from "redux";
import { setCartItems, setIsCartOpen } from "./cart.action";
import { CartItem } from "./cart.types";

export const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
};

export type CartState = {
  readonly isCartOpen: boolean;
  readonly cartItems: CartItem[];
};

export const cartReducer = (state = INITIAL_STATE, action: AnyAction): CartState => {
  if (setIsCartOpen.match(action)) {
    return {
      ...state,
      isCartOpen: action.payload,
    };
  }

  if (setCartItems.match(action)) {
    return {
      ...state,
      cartItems: action.payload,
    };
  }

  return state;
};
