import { Button, Card, Form, Input } from "antd";
import firebase from "firebase";
import React from "react";
import { auth } from "../utils/firebase";

const Login = () => {
  const onFinish = async ({ username, password }) => {
    try {
      await auth.signInWithEmailAndPassword(username, password);
    } catch (error) {
      console.log(error.message);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleCrear = () => {
    try {
      auth.createUserWithEmailAndPassword("test@test.com", "RollingCode123");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoginGoogle = async () => {
    try {
        const provider = new firebase.auth.GoogleAuthProvider();
        await auth.signInWithPopup(provider)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card>
        <Button type="primary" onClick={handleCrear}>
          Crear
        </Button>
        <Button
          type="primary"
          onClick={handleLoginGoogle}
          style={{ marginLeft: 20 }}
        >
          Login with Google
        </Button>
        <Form name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default Login;
