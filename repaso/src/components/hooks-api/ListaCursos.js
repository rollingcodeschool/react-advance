import { useState, useEffect } from 'react';
import { Spin, Empty, message } from 'antd';
import { LoadingOutlined } from '@ant-design/icons'
import Curso from './Curso';
import axios from 'axios';

/* Ejercicio: Añadir profesores y comentarios. */

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />

const ListaCursos = () => {
  const [cursos, setCursos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchCursos = async () => {
    try {
      const response = await axios.get('https://react-advance-backend.herokuapp.com/cursos');
      setCursos(response.data);
      setIsLoading(false);
    } catch (error) {
      message.error('Hubo un error tratando de obtener los cursos.');
    };
  };

  useEffect(() => {
    if (!cursos.length) {
      fetchCursos();
    }
  }, [cursos]);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <h1>Cursos</h1>
      {
        isLoading ? (
          <Spin indicator={antIcon} />
        ) : (
            Boolean(cursos.length)
              ? (
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexWrap: 'wrap'
                  }}
                >
                  {cursos.map(curso => <Curso curso={curso} />)}
                </div>
              ) : (
                <Empty />
              )
          )
      }
    </div>
  );
};

export default ListaCursos;