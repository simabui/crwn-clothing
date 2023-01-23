import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { selectCategoriesMap } from "../../store/categories/categories.selector";
import { CategoryRouteContainer, CategoryTitle } from "./category.styles.jsx";

export default function CategoryComponent() {
  const { category } = useParams();

  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      <CategoryRouteContainer>
        {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
      </CategoryRouteContainer>
    </>
  );
}
