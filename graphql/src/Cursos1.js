import { useQuery } from "@apollo/client";
import { List, Typography, Divider } from "antd";
import React from "react";
import { GET_CURSOS } from "./graphql/cursos/cursos";

const Cursos1 = () => {
  const { data, error } = useQuery(GET_CURSOS);

  if (!data) return "Cargando...";

  return (
    <div style={{ padding: 20 }}>
      <List
        bordered
        dataSource={data.cursos}
        renderItem={(item) => (
          <List.Item>
            <Typography.Text>{item.id}</Typography.Text>
            <Typography.Text>{item.nombre}</Typography.Text>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Cursos1;
