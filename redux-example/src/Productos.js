import React from "react";
import { useDispatch } from "react-redux";
import { ListaProductos } from "./ListaProductos";
import { agregar } from "./slices/CarritoSlice";

const Productos = () => {
  const dispatch = useDispatch();
  console.log("me rerenderice productos");
  const handleClick = (producto) => () => dispatch(agregar(producto));
  return (
    <div>
      {ListaProductos.map((producto) => (
        <ul>
          <li>{producto.nombre}</li>
          <li>{producto.precio}</li>
          <li>
            <button onClick={handleClick(producto)}>agregar</button>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Productos;
