import axios from 'axios';
import { SWAPI_URL } from './constants';

export const swapi = axios.create({
  baseURL: SWAPI_URL,
});

export default swapi;
