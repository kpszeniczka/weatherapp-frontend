export interface DailyForecast {
  date: string;
  weather_code: number;
  weather_description: string;
  temperature_max: number;
  temperature_min: number;
  sunshine_hours: number;
  solar_energy_kwh: number;
}

export interface WeeklySummary {
  average_pressure: number;
  average_sunshine_hours: number;
  extreme_temperatures: {
    min: number;
    max: number;
  };
  weather_summary: string;
  precipitation_days: number;
}

export interface Location {
  latitude: number;
  longitude: number;
}

export interface ForecastResponse {
  forecast: DailyForecast[];
}