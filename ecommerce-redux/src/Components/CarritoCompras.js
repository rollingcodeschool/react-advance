import { Card } from "antd";
import Meta from "antd/lib/card/Meta";
import React from "react";
import { useSelector } from "react-redux";
import { getCarrito } from "../redux/productos/productoSlice";

const CarritoCompras = () => {
  const carrito = useSelector(getCarrito);

  if (!carrito.length) return "Carrito vacio";

  return carrito.map((producto) => (
    <Card
      key={producto.id}
      hoverable
      cover={<img alt="example" src={producto.image} height="200" />}
    >
      <Meta title={producto.name} description={producto.description} />
    </Card>
  ));
};

export default CarritoCompras;
