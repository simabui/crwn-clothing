import React, { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { CheckoutItemContainer, ImageContainer, Span, Quantity, Arrow, Value, RemoveButton } from "./checkout-item.styles.jsx";

export default function CheckoutItem({ cartItem }) {
  const { addItemToCart, removeItemFromCart, clearItemFromCart } = useContext(CartContext);
  const { name, quantity, imageUrl, price, id } = cartItem;

  const clearItemHandler = () => clearItemFromCart(id);
  const removeItemHandler = () => removeItemFromCart(cartItem);
  const addItemHandler = () => addItemToCart(cartItem);

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Span> {name}</Span>

      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value className="value">{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>

      <Span>{price}</Span>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
}
