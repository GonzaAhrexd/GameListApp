import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5251/api/',
//   withCredentials: true

});

export default instance;