import { useEffect } from "react";
import { createContext, useState } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = (props) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    async function getCategoriesMap() {
      const categoryMap = await getCategoriesAndDocuments();

      setCategoriesMap(categoryMap);
    }

    getCategoriesMap();
  }, []);

  return <CategoriesContext.Provider value={categoriesMap}>{props.children}</CategoriesContext.Provider>;
};
