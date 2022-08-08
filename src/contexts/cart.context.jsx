import { createContext, useState } from "react";

const addCartItem = (cartItems, productToAdd) => {
  //find if cartItems contains productToAdd
  const searchedCartIndex = cartItems.findIndex(
    (cartItem) => cartItem.id === productToAdd.id
  );

  //if found, increment quantity
  if (searchedCartIndex >= 0) {
    cartItems[searchedCartIndex].quantity++;
    return cartItems;
  } else {
    //return new array with modified cartItems/new cart item
    const newArray = [...cartItems, { ...productToAdd, quantity: 1 }];
    return newArray;

    // newCartItems = cartItems.push(productToAdd);
    // addItemToCart(newCartItems);
  }
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
});

/*

products
 */

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  // const [cartCount, setCartCount] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
