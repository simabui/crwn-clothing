import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { ShoppingIcon, CartIconContainer, ItemCount } from "./cart-icon.styles.jsx";

export default function CartIcon() {
  const { setIsCartOpen, cartCount } = useContext(CartContext);

  function handleCartOpen() {
    setIsCartOpen((prevState) => !prevState);
  }

  return (
    <CartIconContainer onClick={handleCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
}
