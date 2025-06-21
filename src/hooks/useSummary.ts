import { useState, useEffect } from 'react';
import { WeeklySummary, Location } from '../types/weather.types';
import { weatherApi } from '../services/weatherApi';

interface UseSummaryResult {
  summary: WeeklySummary | null;
  loading: boolean;
  error: string | null;
}

export const useSummary = (location: Location | null): UseSummaryResult => {
  const [summary, setSummary] = useState<WeeklySummary | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!location) return;

    const fetchSummary = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const data = await weatherApi.getSummary(location);
        console.log('Summary data received:', data); // Debug log
        setSummary(data);
      } catch (err) {
        console.error('Summary fetch error:', err); // Debug log
        setError(err instanceof Error ? err.message : 'Unknown error while fetching summary');
      } finally {
        setLoading(false);
      }
    };

    fetchSummary();
  }, [location]);

  return { summary, loading, error };
};