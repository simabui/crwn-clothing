import React from "react";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component.jsx";
import Category from "../category/category.component";
import { CategoriesProvider } from "../../context/product.context";
export default function Shop() {
  return (
    <CategoriesProvider>
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=":category" element={<Category />} />
      </Routes>
    </CategoriesProvider>
  );
}
