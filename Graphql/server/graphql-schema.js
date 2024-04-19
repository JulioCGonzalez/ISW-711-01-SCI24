import ApolloClient from 'apollo-boost';
import { gql } from 'apollo-boost';

// Crea un cliente GraphQL apuntando a tu servidor GraphQL
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // Reemplaza esto con la URL de tu servidor GraphQL
});

// Consulta GraphQL para obtener la lista de cursos
const GET_COURSES = gql`
  query {
    courses {
      id
      title
    }
  }
`;

// Consulta GraphQL para obtener la lista de profesores
const GET_TEACHERS = gql`
  query {
    teachers {
      id
      name
    }
  }
`;

// Función para obtener la lista de cursos y mostrarla en la consola
client.query({ query: GET_COURSES })
  .then(result => console.log('Courses:', result.data.courses))
  .catch(error => console.error('Error fetching courses:', error));

// Función para obtener la lista de profesores y mostrarla en la consola
client.query({ query: GET_TEACHERS })
  .then(result => console.log('Teachers:', result.data.teachers))
  .catch(error => console.error('Error fetching teachers:', error));
