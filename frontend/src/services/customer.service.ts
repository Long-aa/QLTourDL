import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api/v1';

const api = axios.create({
  baseURL: `${API_URL}/customers`,
});

export const customerService = {
  getAll: async (params?: { skip?: number; limit?: number }) => {
    const response = await api.get('/', { params });
    return response.data;
  },

  getById: async (id: number) => {
    const response = await api.get(`/${id}`);
    return response.data;
  },

  create: async (data: any) => {
    const response = await api.post('/', data);
    return response.data;
  },

  update: async (id: number, data: any) => {
    const response = await api.put(`/${id}`, data);
    return response.data;
  },

  delete: async (id: number) => {
    const response = await api.delete(`/${id}`);
    return response.data;
  },
};
