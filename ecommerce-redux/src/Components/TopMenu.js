import { Badge, Drawer, Menu } from "antd";
import React, { useState } from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import CarritoCompras from "./CarritoCompras";
import { getCarrito } from "../redux/productos/productoSlice";
import { useSelector } from "react-redux";

const TopMenu = () => {
  const carrito = useSelector(getCarrito);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSlider = () => setIsOpen((state) => !state);

  const badgeCount = carrito.length;

  return (
    <>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        <Menu.Item key="1">
          <Badge count={badgeCount}>
            <ShoppingCartOutlined
              style={{ color: "white" }}
              onClick={toggleSlider}
            />
          </Badge>
        </Menu.Item>
      </Menu>
      <Drawer
        title="Carrito de compras"
        placement="right"
        closable={false}
        onClose={toggleSlider}
        visible={isOpen}
        width="450"
      >
        <CarritoCompras />
      </Drawer>
    </>
  );
};

export default TopMenu;
