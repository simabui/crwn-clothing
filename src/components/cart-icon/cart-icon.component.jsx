import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.styles.jsx";

export default function CartIcon() {
  const { setIsCartOpen, cartCount, isCartOpen } = useContext(CartContext);

  function handleCartOpen() {
    setIsCartOpen(!isCartOpen);
  }

  return (
    <CartIconContainer onClick={handleCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
}
