import React, { useContext } from "react";
import { CategoriesContext } from "../../context/product.context";
import CategoryPreview from "../../components/category-preview/category-preview.component";

export default function CategoriesPreview() {
  const categoriesMap = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((category) => {
        const products = categoriesMap[category];
        return <CategoryPreview key={category} title={category} products={products} />;
      })}
    </>
  );
}
