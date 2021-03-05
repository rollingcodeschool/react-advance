import { Space, Table } from "antd";
import React, { useEffect, useState } from "react";
import { db } from "../utils/firebase";

const MisCompras = () => {
  const [compras, setCompras] = useState([]);
  useEffect(() => {
    db.collection("compras").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setCompras(docs);
    });
  }, []);

  const updateName = (id) => async () => {
    try {
      const compraToUpadte = compras.find((compra) =>
        compra.carrito.some((com) => com.id === id)
      );
      const productoToUpdate = compraToUpadte.carrito.find(
        (producto) => producto.id === id
      );
      productoToUpdate.name = "kevin";
      await db
        .collection("compras")
        .doc(compraToUpadte.id)
        .update(compraToUpadte);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteCompra = (id) => async () => {
    try {
      if (window.confirm("Esta seguro que desea borrar")) {
        const compraToDelete = compras.find((compra) =>
          compra.carrito.some((com) => com.id === id)
        );
        await db.collection("compras").doc(compraToDelete.id).delete();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a onClick={updateName(record.id)}>Update</a>
          <a onClick={deleteCompra(record.id)}>Delete</a>
        </Space>
      ),
    },
  ];

  return compras.map((compra) => (
    <Table columns={columns} dataSource={compra.carrito} />
  ));
};

export default MisCompras;
