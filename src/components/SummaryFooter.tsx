import React from 'react';
import { WeeklySummary } from '../types/weather.types';

interface SummaryFooterProps {
  summary: WeeklySummary;
}

export const SummaryFooter: React.FC<SummaryFooterProps> = ({ summary }) => (
  <div className="bg-gray-100 rounded-lg p-6 mt-8 w-full">
    <h3 className="text-lg font-semibold text-gray-800 mb-4">Weekly Summary</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <p className="text-sm text-gray-600 mb-1">Extreme Temperatures</p>
        <p className="font-semibold">
          <span className="text-blue-600">{summary.extreme_temperatures.min.toFixed(1)}°C</span>
          {' - '}
          <span className="text-red-600">{summary.extreme_temperatures.max.toFixed(1)}°C</span>
        </p>
      </div>
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <p className="text-sm text-gray-600 mb-1">Average Pressure</p>
        <p className="font-semibold">{summary.average_pressure.toFixed(1)} hPa</p>
      </div>
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <p className="text-sm text-gray-600 mb-1">Average Sunshine</p>
        <p className="font-semibold">{summary.average_sunshine_hours.toFixed(1)} h/day</p>
      </div>
      <div className="bg-white rounded-lg p-4 shadow-sm">
        <p className="text-sm text-gray-600 mb-1">Forecast</p>
        <p className="font-semibold capitalize">{summary.weather_summary}</p>
      </div>
    </div>
  </div>
);