import { Button, Card } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCarrito, getCarrito } from "../redux/productos/productoSlice";
import { getUser } from "../redux/productos/userSlice";
import { db } from "../utils/firebase";

const CarritoCompras = ({ toggleSlider }) => {
  const carrito = useSelector(getCarrito);
  const userId = useSelector(getUser);
  const dispatch = useDispatch();

  if (!carrito.length) return "Carrito vacio";

  const handeFinalizarCompra = async () => {
    try {
      const data = {
        carrito,
        userId,
      };
      await db.collection("compras").doc().set(data);
      dispatch(clearCarrito());
      toggleSlider();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      {carrito.map((producto) => (
        <Card
          key={producto.id}
          hoverable
          cover={<img alt="example" src={producto.image} height="200" />}
        >
          <Meta title={producto.name} description={producto.description} />
        </Card>
      ))}
      <Button type="primary" onClick={handeFinalizarCompra}>
        Finalizar compra
      </Button>
    </>
  );
};

export default CarritoCompras;
