// Paso 5: borra el bloque de abajo y descomenta el bloque comentado completo
// (crea la instancia real de axios, ya instalado, con el interceptor que
// adjunta el token guardado en cada petición).
//const api = {
//  get: () => Promise.resolve({ data: { data: [] } }),
//  post: () => Promise.resolve({ data: { token: null } }),
//  patch: () => Promise.resolve({ data: { data: {} } }),
//  delete: () => Promise.resolve({ data: {} }),
//};

import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:8000/api' });
//
api.interceptors.request.use((config) => {
const token = localStorage.getItem('taskflow_token');
 if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;
