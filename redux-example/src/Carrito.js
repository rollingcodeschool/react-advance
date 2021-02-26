import React from "react";
import { useSelector } from "react-redux";
import { obtenerListaProductos } from "./slices/CarritoSlice";

const Carrito = () => {
  const listaProductos = useSelector(obtenerListaProductos);
  const pepe = useSelector((state) => state.kevin.pepe);
  console.log(pepe);
  return (
    <div>
      <h1>{listaProductos.length}</h1>
      {listaProductos.map((producto) => (
        <ul>
          <li>{producto.nombre}</li>
          <li>{producto.precio}</li>
        </ul>
      ))}
    </div>
  );
};

export default Carrito;
