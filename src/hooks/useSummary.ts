import { useState, useEffect } from 'react';
import { WeeklySummary, Location } from '../types';
import { weatherApi } from '../services';

interface UseSummaryResult {
  summary: WeeklySummary | null;
  loading: boolean;
  error: string | null;
}

export const useSummary = (location: Location | null, language: string): UseSummaryResult => {
  const [summary, setSummary] = useState<WeeklySummary | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!location) return;

    const fetchSummary = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const data = await weatherApi.getSummary(location, language);
        setSummary(data);
      } catch (err) {
        console.error('Summary fetch error:', err);
        setError(err instanceof Error ? err.message : 'Unknown error while fetching summary');
      } finally {
        setLoading(false);
      }
    };

    fetchSummary();
  }, [location, language]);

  return { summary, loading, error };
};