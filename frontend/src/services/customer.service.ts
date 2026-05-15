import api from './api';

export const customerService = {
  getAll: async () => {
    const response = await api.get('customers/');
    return response.data;
  },

  getCustomerById: async (id: number) => {
    const response = await api.get(`customers/${id}`);
    return response.data;
  },

  createCustomer: async (data: any) => {
    const response = await api.post('customers/', data);
    return response.data;
  },

  updateCustomer: async (id: number, data: any) => {
    const response = await api.put(`customers/${id}`, data);
    return response.data;
  },

  deleteCustomer: async (id: number) => {
    const response = await api.delete(`customers/${id}`);
    return response.data;
  },
};
