import { createContext, useEffect, useState } from "react";
export const CartContext = createContext({});

export const CartContextProvider = ({ children }) => {
  const isClient = typeof window !== "undefined";
  const ls = isClient ? window.localStorage : null;
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    if (cartProducts?.length > 0) {
      ls?.setItem("cart", JSON.stringify(cartProducts));
    }
  }, [cartProducts]);

  useEffect(() => {
    if (ls && ls.getItem("cart")) {
      setCartProducts(JSON.parse(ls.getItem("cart")));
    }
  }, []);

  const addProduct = (productId) => {
    setCartProducts((prev) => [...prev, productId]);
  };
  const removeProduct = (productId) => {
    setCartProducts((prev) => {
      const position = prev.indexOf(productId);
      if (position !== -1) {
        return prev.filter((value, index) => index !== position);
      }
      return prev
    });
  };

  return (
    <CartContext.Provider value={{ cartProducts, setCartProducts, addProduct, removeProduct }}>
      {children}
    </CartContext.Provider>
  );
};
