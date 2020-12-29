import { Card, Icon, Text, Button } from "@ui-kitten/components";
import React, { useContext, useState } from "react";
import { Image } from "react-native";
import CartContext from "../Context/Cart";

const ProductCard = ({ producto, navigation }) => {
  const [cantidadProducto, setCantidadProducto] = useState(0);
  const { addShopingCart } = useContext(CartContext);

  const handleAdd = (producto) => () => {
    setCantidadProducto((state) => state + 1);
    addShopingCart(producto);
  };

  return (
    <Card
      style={{ flex: 1, margin: 5 }}
      onPress={() =>
        navigation.navigate("ProductDetail", { productId: producto.id })
      }
      header={() => (
        <Image
          style={{ width: "100%", height: 100 }}
          source={{
            uri: producto.image,
          }}
        />
      )}
      footer={() => (
        <>
          <Button
            appearance="ghost"
            onPress={handleAdd(producto)}
            accessoryLeft={(props) => (
              <Icon {...props} name="plus-circle-outline" />
            )}
          />
          {cantidadProducto > 0 && <Text>{cantidadProducto}</Text>}
        </>
      )}
    >
      <Text category="label" numberOfLines={2}>
        {producto.title}
      </Text>
      <Text category="p2">$ {producto.price}</Text>
    </Card>
  );
};

export default React.memo(ProductCard);
