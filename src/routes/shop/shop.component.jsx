import React, { useContext } from "react";
import { ProductContext } from "../../context/product.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";

export default function Shop() {
  const value = useContext(ProductContext);

  return (
    <div className="products-container">
      {value.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}
