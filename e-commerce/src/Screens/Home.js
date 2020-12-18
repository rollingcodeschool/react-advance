import React, { useEffect, useState } from "react";
import {
  Card,
  Icon,
  Layout,
  Text,
  TopNavigation,
  Button,
  Divider,
} from "@ui-kitten/components";
import Axios from "axios";
import { Alert, FlatList, Image } from "react-native";
import LottieView from "lottie-react-native";

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

  const renderProduct = ({ item: { image, title, price, id } }) => (
    <Card
      style={{ flex: 1, margin: 5 }}
      onPress={() => navigation.navigate("ProductDetail", { productId: id })}
      header={() => (
        <Image
          style={{ width: "100%", height: 100 }}
          source={{
            uri: image,
          }}
        />
      )}
      footer={() => (
        <Button
          appearance="ghost"
          accessoryLeft={(props) => (
            <Icon {...props} name="shopping-bag-outline" />
          )}
        />
      )}
    >
      <Text category="label" numberOfLines={2}>
        {title}
      </Text>
      <Text category="p2">$ {price}</Text>
    </Card>
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
