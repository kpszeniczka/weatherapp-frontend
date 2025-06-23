import { DailyForecast, WeeklySummary, Location, ForecastResponse } from '../types';
import { API_BASE_URL } from '../variables';

export const weatherApi = {
  async getForecast(location: Location, language: string = 'en'): Promise<DailyForecast[]> {
    const response = await fetch(
      `${API_BASE_URL}/weather/forecast?latitude=${location.latitude}&longitude=${location.longitude}&language=${language}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch forecast');
    }
    
    const data: ForecastResponse = await response.json();
    return data.forecast;
  },

  async getSummary(location: Location, language: string = 'en'): Promise<WeeklySummary> {
    const response = await fetch(
      `${API_BASE_URL}/weather/summary?latitude=${location.latitude}&longitude=${location.longitude}&language=${language}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch summary');
    }
    
    const data: WeeklySummary = await response.json();
    return data;
  }
};