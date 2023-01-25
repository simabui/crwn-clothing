import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/product-card/product-card.component";
import { selectCategoriesMap, selectCategoriesIsLoading } from "../../store/categories/categories.selector";
import { CategoryRouteContainer, CategoryTitle } from "./category.styles.jsx";
import Spinner from "../../components/spinner/spinner.components";

export default function CategoryComponent() {
  const { category } = useParams();
  const isLoading = useSelector(selectCategoriesIsLoading);
  const categoriesMap = useSelector(selectCategoriesMap);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <CategoryTitle>{category.toUpperCase()}</CategoryTitle>
      {isLoading ? (
        <Spinner />
      ) : (
        <CategoryRouteContainer>
          {products && products.map((product) => <ProductCard key={product.id} product={product} />)}
        </CategoryRouteContainer>
      )}
    </>
  );
}
