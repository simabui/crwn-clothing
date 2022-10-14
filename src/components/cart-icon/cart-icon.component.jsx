import React, { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cart.context";
import "./cart-icon.styles.scss";

export default function CartIcon() {
  const { setIsCartOpen, cartCount } = useContext(CartContext);

  function handleCartOpen() {
    setIsCartOpen((prevState) => !prevState);
  }

  return (
    <div className="cart-icon-container" onClick={handleCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
}
