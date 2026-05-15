import api from './api';

export const authService = {
  login: async (credentials: any) => {
    const response = await api.post('auth/login', credentials);
    if (response.data.access_token) {
      localStorage.setItem('token', response.data.access_token);
    }
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('token');
  },

  getCurrentUser: async () => {
    const response = await api.get('auth/me');
    return response.data;
  },
};
