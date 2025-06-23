import { useLanguage, useTheme, useSummary, useForecast, useLocation } from './hooks';
import { ThemeToggle, LanguageToggle, LocationMap, ErrorMessage, LoadingSpinner, SummaryFooter, WeatherTable } from './components';


const App = () => {
  const { location, error: locationError, loading: locationLoading, setLocation } = useLocation();
  const { language, toggleLanguage, t } = useLanguage();
  const { forecast, loading: forecastLoading, error: forecastError } = useForecast(location, language);
  const { summary, loading: summaryLoading, error: summaryError } = useSummary(location, language);
  const { theme, toggleTheme } = useTheme();

  const isLoading = locationLoading || forecastLoading || summaryLoading;
  const error = locationError || forecastError || summaryError;

  const getLocalizedError = (error: string): string => {
    if (error.includes('Location access denied')) return t.locationDenied;
    if (error.includes('Location information unavailable')) return t.locationUnavailable;
    if (error.includes('Location request timed out')) return t.locationTimeout;
    if (error.includes('Geolocation is not supported')) return t.locationNotSupported;
    if (error.includes('Unable to retrieve location')) return t.locationError;
    if (error.includes('Failed to fetch forecast')) return t.fetchError;
    if (error.includes('Failed to fetch summary')) return t.summaryError;
    return error;
  };

  const getLocalizedWeatherSummary = (summary: string): string => {
    if (summary === 'with precipitation' || summary === 'z opadami') return t.withPrecipitation;
    if (summary === 'without precipitation' || summary === 'bez opadów') return t.withoutPrecipitation;
    return summary;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 px-4 transition-colors">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-8">
          <div className="flex justify-end gap-2 mb-4">
            <LanguageToggle language={language} toggleLanguage={toggleLanguage} />
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">{t.title}</h1>
          <p className="text-gray-600 dark:text-gray-400">{t.subtitle}</p>
        </header>

        <LocationMap 
          location={location} 
          onLocationSelect={setLocation}
          currentLocationText={t.currentLocation}
          selectLocationText={t.selectLocation}
        />

        {isLoading && <LoadingSpinner />}
        {error && !locationLoading && <ErrorMessage message={getLocalizedError(error)} />}
        
        {!isLoading && !error && forecast.length > 0 && (
          <>
            <WeatherTable 
              forecast={forecast} 
              maxLabel={t.max}
              minLabel={t.min}
              sunLabel={t.sun}
              energyLabel={t.energy}
            />
            {summary && (
              <SummaryFooter 
                summary={summary} 
                title={t.weeklySum}
                extremeTempLabel={t.extremeTemp}
                avgPressureLabel={t.avgPressure}
                avgSunshineLabel={t.avgSunshine}
                forecastLabel={t.forecast}
                perDayLabel={t.perDay}
                weatherSummary={getLocalizedWeatherSummary(summary.weather_summary)}
              />
            )}
          </>
        )}
        
        {!isLoading && !error && forecast.length === 0 && !locationError && (
          <div className="text-center text-gray-600 dark:text-gray-400">
            <p>{t.noData}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;