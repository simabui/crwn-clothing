import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import "./checkout-item.styles.scss";

export default function CheckoutItem({ cartItem }) {
  const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);
  const { name, quantity, imageUrl, price, id } = cartItem;

  const clearItemHandler = () => clearItemFromCart(id);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name"> {name}</span>

      <span className="quantity">
        <span onClick={removeItemHandler} className="arrow">
          &#10094;
        </span>
        <span className="value">{quantity}</span>
        <span onClick={addItemHandler} className="arrow">
          &#10095;
        </span>
      </span>

      <span className="price">{price}</span>
      <div className="remove-button" onClick={clearItemHandler}>
        &#10005;
      </div>
    </div>
  );
}
