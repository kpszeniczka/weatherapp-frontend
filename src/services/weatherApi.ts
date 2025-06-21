import { DailyForecast, WeeklySummary, Location, ForecastResponse } from '../types/weather.types';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api';

export const weatherApi = {
  async getForecast(location: Location): Promise<DailyForecast[]> {
    const response = await fetch(
      `${API_BASE_URL}/weather/forecast?latitude=${location.latitude}&longitude=${location.longitude}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch forecast');
    }
    
    const data: ForecastResponse = await response.json();
    return data.forecast;
  },

  async getSummary(location: Location): Promise<WeeklySummary> {
    const response = await fetch(
      `${API_BASE_URL}/weather/summary?latitude=${location.latitude}&longitude=${location.longitude}`
    );
    
    if (!response.ok) {
      throw new Error('Failed to fetch summary');
    }
    
    const data: WeeklySummary = await response.json();
    return data;
  }
};