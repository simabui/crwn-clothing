import React from "react";
import { useSelector } from "react-redux";
import CategoryPreview from "../../components/category-preview/category-preview.component";
import { selectCategoriesMap } from "../../store/categories/categories.selector";

export default function CategoriesPreview() {
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <>
      {Object.keys(categoriesMap).map((category) => {
        const products = categoriesMap[category];
        return <CategoryPreview key={category} title={category} products={products} />;
      })}
    </>
  );
}
