import React, { useContext } from "react";
import Button from "../button/button-component";
import { CartContext } from "../../context/cart.context";
import "./product-card.styles.scss";

export default function ProductCard({ product }) {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  function addProductToCart() {
    addItemToCart(product);
  }

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" handleClick={addProductToCart}>
        Add to card
      </Button>
    </div>
  );
}
