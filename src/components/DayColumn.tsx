import { DailyForecast } from '../types';
import { formatDate, getWeatherIcon } from '../utils';

interface DayColumnProps {
  day: DailyForecast;
  maxLabel: string;
  minLabel: string;
  sunLabel: string;
  energyLabel: string;
}

export const DayColumn = ({ 
  day, 
  maxLabel, 
  minLabel, 
  sunLabel, 
  energyLabel 
} : DayColumnProps) => (
  <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow">
    <div className="text-center">
      <p className="font-semibold text-gray-700 dark:text-gray-300 mb-2">{formatDate(day.date)}</p>
      <div className="flex justify-center mb-3">
        {getWeatherIcon(day.weather_code)}
      </div>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{day.weather_description}</p>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">{maxLabel}:</span>
          <span className="font-medium text-red-500 dark:text-red-400">{day.temperature_max.toFixed(1)}°C</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">{minLabel}:</span>
          <span className="font-medium text-blue-500 dark:text-blue-400">{day.temperature_min.toFixed(1)}°C</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600 dark:text-gray-400">{sunLabel}:</span>
          <span className="font-medium dark:text-gray-300">{day.sunshine_hours.toFixed(1)}h</span>
        </div>
        <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
          <div className="flex justify-between">
            <span className="text-gray-600 dark:text-gray-400">{energyLabel}:</span>
            <span className="font-medium text-green-600 dark:text-green-400">{day.solar_energy_kwh.toFixed(2)} kWh</span>
          </div>
        </div>
      </div>
    </div>
  </div>
);