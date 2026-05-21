import api from './api';

export interface SearchResultItem {
  id: number;
  title: string;
  subtitle?: string;
  type: 'tour' | 'customer' | 'supplier' | 'order' | 'employee';
  link: string;
  image_url?: string;
}

export interface GlobalSearchResponse {
  results: SearchResultItem[];
}

export const searchService = {
  globalSearch: async (q: string): Promise<GlobalSearchResponse> => {
    const response = await api.get('search', { params: { q } });
    return response.data;
  }
};
