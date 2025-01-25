import axios from 'axios';
import { VITE } from '../config/env';

export const api = axios.create({
  baseURL: VITE.BASE_URL || 'http://localhost:3000',
});
