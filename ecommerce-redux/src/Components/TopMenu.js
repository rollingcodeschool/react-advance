import { Badge, Drawer, Menu } from "antd";
import React, { useState } from "react";
import { ShoppingCartOutlined, LogoutOutlined } from "@ant-design/icons";
import CarritoCompras from "./CarritoCompras";
import { getCarrito } from "../redux/productos/productoSlice";
import { useSelector } from "react-redux";
import { auth } from "../utils/firebase";

const TopMenu = () => {
  const carrito = useSelector(getCarrito);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSlider = () => setIsOpen((state) => !state);

  const logout = () => {
    auth.signOut();
  };

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
        <Menu.Item key="2">
          <LogoutOutlined style={{ color: "white" }} onClick={logout} />
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
        <CarritoCompras toggleSlider={toggleSlider}/>
      </Drawer>
    </>
  );
};

export default TopMenu;
