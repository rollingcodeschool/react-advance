import logo from "./logo.svg";
import "./App.css";
import Contador from "./helloWorld";
import { useEffect, useState } from "react";
import React from "react";

function App() {
  const [count, setCount] = useState(0);
  const [cursos, setCursos] = useState([]);
  const [loadgin, setLoadgin] = useState(false);

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        setLoadgin(true);
        const cursosRaw = await fetch(
          "https://react-advance-backend.herokuapp.com/cursos"
        );
        const cursos = await cursosRaw.json();
        setCursos(cursos);
      } catch (error) {
        console.log("ups... algo salio mal");
      } finally {
        setLoadgin(false);
      }
    };
    fetchCursos();
  }, []);

  const handleClick = () => setCount((valorCuenta) => valorCuenta + 1);

  return (
    <div className="w-full h-screen flex justify-center items-center p-2 flex-col">
      <Contador count={count} />
      <button className="mt-4" onClick={handleClick}>
        Aumentar
      </button>
      <div>
        {loadgin ? (
          "Cargando..."
        ) : (
          <ul>
            {cursos.map(({ nombre, id }) => (
              <li key={id}>{nombre}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;
