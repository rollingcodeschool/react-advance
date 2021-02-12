import { gql } from "@apollo/client";

const GET_CURSOS = gql`
  query GetCursos {
    cursos {
      id
      nombre
    }
  }
`;

const UPDATE_CURSOS = gql`
  mutation UpdateCurso($input: updateCursoInput) {
    updateCurso(input: $input) {
      curso {
        id
        nombre
      }
    }
  }
`;

export { GET_CURSOS, UPDATE_CURSOS };
