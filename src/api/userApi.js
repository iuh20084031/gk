import axios from 'axios';

const BASE_URL = 'https://6554f56263cafc694fe74424.mockapi.io/api/users';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getUser = () => api.get('/');
export const addUserApi = (user) => api.post('/', contact);
export const updateUserApi = (id, updatedUser) => api.put(`/${id}`, updatedUser);
export const deleteUserApi = (id) => api.delete(`/${id}`);