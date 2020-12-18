import {
  TopNavigationAction,
  Icon,
  TopNavigation,
  Layout,
  Text,
  Card,
  Input,
  Button,
} from "@ui-kitten/components";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Alert, Image, View } from "react-native";
import LottieView from "lottie-react-native";

const ProductDetail = ({ navigation, route }) => {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const { productId } = route.params;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const { data } = await Axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        setProduct(data);
        console.log(data);
      } catch (error) {
        Alert.alert("Error", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [productId]);

  if (loading) {
    return (
      <Layout style={{ flex: 1 }}>
        <LottieView
          source={require("../assets/lotties/ecommerce.json")}
          autoPlay
          loop
        />
      </Layout>
    );
  }

  const renderBackAction = () => (
    <TopNavigationAction
      icon={(props) => <Icon {...props} name="arrow-back" />}
      onPress={() => navigation.goBack()}
    />
  );

  return (
    <>
      <TopNavigation
        alignment="center"
        title="Detalles del producto"
        accessoryLeft={renderBackAction}
      />
      <Layout style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Image
            style={{ width: "100%", height: 300 }}
            source={{
              uri: product.image,
            }}
          />
          <View style={{ paddingHorizontal: 16 }}>
            <Text category="h6" style={{ marginVertical: 5 }}>
              {product.title}
            </Text>
            <Text category="label" style={{ marginVertical: 5 }}>
              Precio: $ARS {product.price}
            </Text>
            <Text category="p1" style={{ marginVertical: 5 }}>
              {product.description}
            </Text>
          </View>
        </View>
        <Button>Comprar</Button>
      </Layout>
    </>
  );
};

export default ProductDetail;
