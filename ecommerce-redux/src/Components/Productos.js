import { LoadingOutlined } from "@ant-design/icons";
import { Card, Spin } from "antd";
import Meta from "antd/lib/card/Meta";
import React, { useEffect } from "react";
import { PlusCircleFilled } from "@ant-design/icons";
import {
  agregarProducto,
  getProductos,
  getProductosLoading,
} from "../redux/productos/productoSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductos } from "../redux/productos/actions";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

const Productos = () => {
  const dispatch = useDispatch();
  const productos = useSelector(getProductos);
  const loading = useSelector(getProductosLoading);

  useEffect(() => {
    if (!productos.length) {
      dispatch(fetchProductos());
    }
  }, [dispatch, productos]);

  if (loading) return <Spin indicator={antIcon} />;

  const handleAgregarProducto = (producto) => () =>
    dispatch(agregarProducto(producto));

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: 20,
      }}
    >
      {productos.map((producto) => (
        <Card
          key={producto.id}
          hoverable
          cover={<img alt="example" src={producto.image} height="200" />}
          actions={[
            <PlusCircleFilled onClick={handleAgregarProducto(producto)} />,
          ]}
        >
          <Meta title={producto.name} description={producto.description} />
        </Card>
      ))}
    </div>
  );
};

export default Productos;
