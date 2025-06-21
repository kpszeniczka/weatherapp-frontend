import React from 'react';
import { DailyForecast } from '../types/weather.types';
import { formatDate } from '../utils/dateFormatter';
import { getWeatherIcon } from '../utils/weatherIcons';

interface DayColumnProps {
  day: DailyForecast;
}

export const DayColumn: React.FC<DayColumnProps> = ({ day }) => (
  <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
    <div className="text-center">
      <p className="font-semibold text-gray-700 mb-2">{formatDate(day.date)}</p>
      <div className="flex justify-center mb-3">
        {getWeatherIcon(day.weather_code)}
      </div>
      <p className="text-sm text-gray-600 mb-3">{day.weather_description}</p>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Max:</span>
          <span className="font-medium text-red-500">{day.temperature_max.toFixed(1)}°C</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Min:</span>
          <span className="font-medium text-blue-500">{day.temperature_min.toFixed(1)}°C</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Sun:</span>
          <span className="font-medium">{day.sunshine_hours.toFixed(1)}h</span>
        </div>
        <div className="pt-2 border-t border-gray-200">
          <div className="flex justify-between">
            <span className="text-gray-600">Energy:</span>
            <span className="font-medium text-green-600">{day.solar_energy_kwh.toFixed(2)} kWh</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);