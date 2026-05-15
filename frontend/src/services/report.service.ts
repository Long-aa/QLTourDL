import api from './api';

const reportApi = {
  getDashboardStats: async () => {
    const response = await api.get('reports/dashboard-stats');
    return response.data;
  },

  getRevenueReport: async (params?: { start_date?: string; end_date?: string }) => {
    const response = await api.get('reports/revenue', { params });
    return response.data;
  },

  getTourReport: async () => {
    const response = await api.get('reports/tours');
    return response.data;
  },
};

export const reportService = reportApi;
