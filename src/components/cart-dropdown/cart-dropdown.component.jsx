import React, { useContext } from "react";
import Button from "../button/button-component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../context/cart.context";
import "./cart-dropdown.styles.scss";

export default function CartDropDown() {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
}
