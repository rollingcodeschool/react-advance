import React from "react";
import "antd/dist/antd.css";
import "./App.css";
import { Layout, Breadcrumb } from "antd";
import Productos from "./Components/Productos";
import TopMenu from "./Components/TopMenu";

const { Header, Content, Footer } = Layout;

function App() {
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
        <Productos />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  );
}

export default App;
