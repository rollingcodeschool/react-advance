import React, { useContext, useEffect, useState } from "react";
import {
  Layout,
  Text,
  TopNavigation,
  Button,
  Divider,
} from "@ui-kitten/components";
import Axios from "axios";
import { Alert, FlatList, Image } from "react-native";
import LottieView from "lottie-react-native";
import CartContext from "../Context/Cart";
import ProductCard from "./ProductCard";

const Home = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const { data } = await Axios.get("https://fakestoreapi.com/products");
        setProducts(data);
      } catch (error) {
        Alert.alert("Error", error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

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

  const renderProduct = ({ item }) => (
    <ProductCard producto={item} navigation={navigation} />
  );

  return (
    <Layout style={{ flex: 1 }}>
      <TopNavigation alignment="center" title="Productos" />
      <Divider />
      <FlatList data={products} renderItem={renderProduct} numColumns={2} />
    </Layout>
  );
};

export default Home;
