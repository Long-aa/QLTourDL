import api from './api';

export const contactService = {
  getAll: async () => {
    const response = await api.get('contacts');
    return response.data;
  },

  submit: async (data: any) => {
    const response = await api.post('contacts', data);
    return response.data;
  },

  updateStatus: async (id: number, status: string) => {
    const response = await api.put(`contacts/${id}`, { status });
    return response.data;
  },

  delete: async (id: number) => {
    const response = await api.delete(`contacts/${id}`);
    return response.data;
  }
};
