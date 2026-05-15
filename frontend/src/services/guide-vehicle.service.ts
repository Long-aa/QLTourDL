import api from './api';

export const guideVehicleService = {
  getGuides: async () => {
    const response = await api.get('guides-vehicles/guides');
    return response.data;
  },

  getVehicles: async () => {
    const response = await api.get('guides-vehicles/vehicles');
    return response.data;
  },

  createGuide: async (data: any) => {
    const response = await api.post('guides-vehicles/guides', data);
    return response.data;
  },

  createVehicle: async (data: any) => {
    const response = await api.post('guides-vehicles/vehicles', data);
    return response.data;
  },
};
