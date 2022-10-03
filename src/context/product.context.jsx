import { createContext, useState } from "react";
import PRODUCTS from "../shop-data.json";

export const ProductContext = createContext({
  products: [],
});

export const ProductProvider = (props) => {
  const [products] = useState(PRODUCTS);

  return <ProductContext.Provider value={products}>{props.children}</ProductContext.Provider>;
};
