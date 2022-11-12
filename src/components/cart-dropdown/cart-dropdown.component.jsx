import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/button-component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../context/cart.context";

import { CartDropDownContainer, EmptyMessage, CartItems } from "./cart-dropdown.styles.jsx";

export default function CartDropDown() {
  const { cartItems, setIsCartOpen } = useContext(CartContext);

  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    setIsCartOpen(false);
    navigate("/checkout");
  };

  return (
    <CartDropDownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem cartItem={item} key={item.id} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button handleClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropDownContainer>
  );
}
