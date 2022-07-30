import { createContext, useState } from "react";

import PRODUCTS from "../shop-data.json";

// as the actual value you want to access
export const ProductsContext = createContext({
  products: [],
});

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };

  // useEffect(() => {
  //   //onAuthStateChangedListener returns a unsubscribe function that tells the listener to stop listener
  //   const unsubscribe = onAuthStateChangedListener((user) => {
  //     if (user) {
  //       createUserDocumentFromAuth(user);
  //     }
  //     setCurrentUser(user);
  //     console.log("user.context", user);
  //   });
  //   //return and run unsubscribe function
  //   return unsubscribe;
  // }, []);

  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
};
