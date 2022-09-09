import { createContext, useEffect, useState } from "react";

// returns new array after adding product to current cartItems array
const addCartItem = (cartItems, productToAdd) => {
  //find if cartItems contains productToAdd
  const searchedCartIndex = cartItems.findIndex(
    (cartItem) => cartItem.id === productToAdd.id
  );

  //if found, increment quantity
  if (searchedCartIndex >= 0) {
    cartItems[searchedCartIndex].quantity++;
    const newArray = [...cartItems];
    return newArray;
  } else {
    //return new array with modified cartItems/new cart item
    const newArray = [...cartItems, { ...productToAdd, quantity: 1 }];

    return newArray;

    // newCartItems = cartItems.push(productToAdd);
    // addItemToCart(newCartItems);
  }
};

const removeCartItem = (cartItems, productToRemove) => {
  //find if cartItems contains productToRemove
  const searchedCartIndex = cartItems.findIndex(
    (cartItem) => cartItem.id === productToRemove.id
  );

  if (searchedCartIndex < 0) {
    return cartItems;
  }

  //if found, increment quantity
  if (cartItems[searchedCartIndex].quantity > 1) {
    cartItems[searchedCartIndex].quantity--;
    const newArray = [...cartItems];
    return newArray;
  } else {
    //return new array with modified cartItems/new cart item

    cartItems.splice(searchedCartIndex, 1);
    const newArray = [...cartItems];
    return newArray;
  }
};

const clearCartItem = (cartItems, cartItemToRemove) => {
  return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
};

export const CartContext = createContext({
  // isCartOpen: false,
  // setIsCartOpen: () => {},
  // cartItems: [],
  // addItemToCart: () => {},
  // removeItemFromCart: () => {},
  // clearItemFromCart: () => {},
  // cartCount: 0,
  // cartTotal: 0
});

/*

products
 */

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newTotal = cartItems.reduce(
      (acc, current) => acc + current.price * current.quantity,
      0
    );
    setCartTotal(newTotal);
  }, [cartItems]);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  };

  const clearItemFromCart = (cartItemToClear) => {
    setCartItems(clearCartItem(cartItems, cartItemToClear));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartItems,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
