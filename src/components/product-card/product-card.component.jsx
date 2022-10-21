import React, { useContext } from "react";
import Button from "../button/button-component";
import { CartContext } from "../../context/cart.context";
import { ProductCardContainer, Footer, Name, Price } from "./product-card.styles.jsx";

export default function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  function addProductToCart() {
    addItemToCart(product);
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
