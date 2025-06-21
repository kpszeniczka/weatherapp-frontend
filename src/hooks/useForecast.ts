import { useState, useEffect } from 'react';
import { DailyForecast, Location } from '../types/weather.types';
import { weatherApi } from '../services/weatherApi';

interface UseForecastResult {
  forecast: DailyForecast[];
  loading: boolean;
  error: string | null;
}

export const useForecast = (location: Location | null): UseForecastResult => {
  const [forecast, setForecast] = useState<DailyForecast[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!location) return;

    const fetchForecast = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const data = await weatherApi.getForecast(location);
        setForecast(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error while fetching forecast');
      } finally {
        setLoading(false);
      }
    };

    fetchForecast();
  }, [location]);

  return { forecast, loading, error };
};