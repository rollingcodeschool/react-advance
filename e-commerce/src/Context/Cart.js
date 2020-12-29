import React, { useState } from "react";

const CartContext = React.createContext({});

export const CartProvider = ({ children }) => {
  const [shoppingCart, setShoppingCart] = useState([]);

  const addShopingCart = (product) => {
    const auxShoppingCart = shoppingCart.map((product) => ({ ...product })); //Clone Array
    const productExists = auxShoppingCart.find(({ id }) => product.id === id);
    if (productExists) {
      productExists.cantidad++;
      setShoppingCart(auxShoppingCart);
    } else {
      setShoppingCart([...auxShoppingCart, { ...product, cantidad: 1 }]);
    }
  };

  const values = {
    shoppingCart,
    addShopingCart,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartContext;
