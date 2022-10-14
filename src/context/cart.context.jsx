import { createContext, useState, useEffect } from "react";

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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  clearItemCart: () => {},
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCarTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);

    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);

    setCarTotal(newCartTotal);
  }, [cartItems]);

  function addItemToCart(productToAdd) {
    setCartItems(addCartItem(cartItems, productToAdd));
  }

  function removeItemFromCart(cartItemToRemove) {
    setCartItems(removeCartItem(cartItems, cartItemToRemove));
  }

  function clearItemFromCart(cartItemToClearId) {
    setCartItems(clearCartItem(cartItems, cartItemToClearId));
  }

  const values = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    cartItems,
    cartCount,
    removeItemFromCart,
    clearItemFromCart,
    cartTotal,
  };
  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};
