import { Breadcrumb } from "antd";
import Layout, { Header, Content, Footer } from "antd/lib/layout/layout";
import React from "react";
import MisCompras from "./MisCompras";
import Productos from "./Productos";
import TopMenu from "./TopMenu";

const Main = () => {
  return (
    <Layout className="layout" style={{ height: "100vh" }}>
      <Header>
        <div className="logo" />
        <TopMenu />
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <MisCompras />
        <Productos />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default Main;
