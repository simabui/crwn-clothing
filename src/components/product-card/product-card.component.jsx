import React from "react";
import { Button } from "../button/button-component";
import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";
import { ProductCardContainer, Footer, Name, Price } from "./product-card.styles.jsx";

export default function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  function addProductToCart() {
    dispatch(addItemToCart(cartItems, product));
  }

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button buttonType="inverted" handleClick={addProductToCart}>
        Add to card
      </Button>
    </ProductCardContainer>
  );
}
