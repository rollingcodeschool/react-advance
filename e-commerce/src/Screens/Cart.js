import React, { useContext } from "react";
import { Text } from "react-native";
import CartContext from "../Context/Cart";

const Cart = () => {
  const { shoppingCart } = useContext(CartContext);
  console.log(shoppingCart);
  return <Text>cart</Text>;
};

export default Cart;
