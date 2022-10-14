import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../button/button-component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../context/cart.context";
import "./cart-dropdown.styles.scss";

export default function CartDropDown() {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    setIsCartOpen(false);
    navigate("/checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}
      </div>
      <Button handleClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </div>
  );
}
