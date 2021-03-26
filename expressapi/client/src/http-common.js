import axios from 'axios';

//Define a URL base da origem para consumo do servico
//https://app-name.herokuapp.com/
//http://localhost:8000/

export default axios.create({
  baseURL: 'http://localhost:3001/',
  headers: {
    'Content-type': 'application/json',
  },
});
