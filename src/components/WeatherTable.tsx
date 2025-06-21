import React from 'react';
import { DailyForecast } from '../types/weather.types';
import { DayColumn } from './DayColumn';

interface WeatherTableProps {
  forecast: DailyForecast[];
}

export const WeatherTable: React.FC<WeatherTableProps> = ({ forecast }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 mb-8">
    {forecast.map((day) => (
      <DayColumn key={day.date} day={day} />
    ))}
  </div>
);