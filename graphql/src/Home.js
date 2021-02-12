import { useMutation } from "@apollo/client";
import { Button, Form, Input } from "antd";
import React from "react";
import Cursos1 from "./Cursos1";
import Cursos2 from "./Cursos2";
import { UPDATE_CURSOS } from "./graphql/cursos/cursos";

const Home = () => {
  const [updateCurso] = useMutation(UPDATE_CURSOS);

  const onFinish = async ({ nombre }) => {
    try {
      const data = await updateCurso({
        variables: {
          input: {
            where: {
              id: "5f93375441f90d0017c5eac8",
            },
            data: {
              nombre,
            },
          },
        },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Cursos1 />
      <Cursos2 />
      <div style={{ padding: 20 }}>
        <Form name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Form.Item
            label="nombre"
            name="nombre"
            rules={[{ required: true, message: "Please input your nombre!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Modificar
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default Home;
