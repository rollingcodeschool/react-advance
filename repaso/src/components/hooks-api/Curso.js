import { Card } from 'antd';

const Curso = ({ curso }) => (
  <Card
    style={{
      maxHeight: 200,
      margin: 20
    }}
    title={curso.nombre}
  >
    <p><b>Creado: </b>{curso.createdAt.substring(0, 10)}</p>
    <p><b>Actualizado: </b>{curso.createdAt.substring(0, 10)}</p>
  </Card>
);

export default Curso;