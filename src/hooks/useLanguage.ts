import { useState, useEffect } from 'react';

export type Language = 'en' | 'pl';

interface Translations {
  title: string;
  subtitle: string;
  weeklySum: string;
  extremeTemp: string;
  avgPressure: string;
  avgSunshine: string;
  forecast: string;
  max: string;
  min: string;
  sun: string;
  energy: string;
  noData: string;
  locationError: string;
  locationUnavailable: string;
  locationTimeout: string;
  locationDenied: string;
  locationNotSupported: string;
  unknownError: string;
  fetchError: string;
  summaryError: string;
  withPrecipitation: string;
  withoutPrecipitation: string;
  perDay: string;
  selectLocation: string;
  currentLocation: string;
}

const translations: Record<Language, Translations> = {
  en: {
    title: '7-Day Weather Forecast',
    subtitle: 'with solar energy production calculations',
    weeklySum: 'Weekly Summary',
    extremeTemp: 'Extreme Temperatures',
    avgPressure: 'Average Pressure',
    avgSunshine: 'Average Sunshine',
    forecast: 'Forecast',
    max: 'Max',
    min: 'Min',
    sun: 'Sun',
    energy: 'Energy',
    noData: 'No weather forecast data available',
    locationError: 'Unable to retrieve location',
    locationUnavailable: 'Location information unavailable',
    locationTimeout: 'Location request timed out',
    locationDenied: 'Location access denied',
    locationNotSupported: 'Geolocation is not supported by your browser',
    unknownError: 'Unknown error',
    fetchError: 'Failed to fetch forecast',
    summaryError: 'Failed to fetch summary',
    withPrecipitation: 'with precipitation',
    withoutPrecipitation: 'without precipitation',
    perDay: 'h/day',
    selectLocation: 'Click on map to select location',
    currentLocation: 'Use current location'
  },
  pl: {
    title: 'Prognoza pogody na 7 dni',
    subtitle: 'z kalkulacją produkcji energii słonecznej',
    weeklySum: 'Podsumowanie tygodnia',
    extremeTemp: 'Temperatury ekstremalne',
    avgPressure: 'Średnie ciśnienie',
    avgSunshine: 'Średni czas nasłonecznienia',
    forecast: 'Prognoza',
    max: 'Max',
    min: 'Min',
    sun: 'Słońce',
    energy: 'Energia',
    noData: 'Brak danych prognozy pogody',
    locationError: 'Nie udało się pobrać lokalizacji',
    locationUnavailable: 'Informacja o lokalizacji niedostępna',
    locationTimeout: 'Przekroczono czas oczekiwania na lokalizację',
    locationDenied: 'Odmowa dostępu do lokalizacji',
    locationNotSupported: 'Geolokalizacja nie jest wspierana przez Twoją przeglądarkę',
    unknownError: 'Nieznany błąd',
    fetchError: 'Błąd pobierania prognozy',
    summaryError: 'Błąd pobierania podsumowania',
    withPrecipitation: 'z opadami',
    withoutPrecipitation: 'bez opadów',
    perDay: 'h/dzień',
    selectLocation: 'Kliknij na mapę aby wybrać lokalizację',
    currentLocation: 'Użyj bieżącej lokalizacji'
  }
};

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('language', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'en' ? 'pl' : 'en');
  };

  const t = translations[language];

  return { language, toggleLanguage, t };
};