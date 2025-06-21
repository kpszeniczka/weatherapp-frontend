import React from 'react';
import { useLocation } from './hooks/useLocation';
import { useForecast } from './hooks/useForecast';
import { useSummary } from './hooks/useSummary';
import { WeatherTable } from './components/WeatherTable';
import { SummaryFooter } from './components/SummaryFooter';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';

const App: React.FC = () => {
  const { location, error: locationError, loading: locationLoading } = useLocation();
  const { forecast, loading: forecastLoading, error: forecastError } = useForecast(location);
  const { summary, loading: summaryLoading, error: summaryError } = useSummary(location);

  const isLoading = locationLoading || forecastLoading || summaryLoading;
  const error = locationError || forecastError || summaryError;

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">7-Day Weather Forecast</h1>
          <p className="text-gray-600">with solar energy production calculations</p>
        </header>

        {isLoading && <LoadingSpinner />}
        {error && <ErrorMessage message={error} />}
        
        {!isLoading && !error && forecast.length > 0 && (
          <>
            <WeatherTable forecast={forecast} />
            {summary && <SummaryFooter summary={summary} />}
          </>
        )}
        
        {!isLoading && !error && forecast.length === 0 && !locationError && (
          <div className="text-center text-gray-600">
            <p>No weather forecast data available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;