import { WeeklySummary } from '../types';

interface SummaryFooterProps {
  summary: WeeklySummary;
  title: string;
  extremeTempLabel: string;
  avgPressureLabel: string;
  avgSunshineLabel: string;
  forecastLabel: string;
  perDayLabel: string;
  weatherSummary: string;
}

export const SummaryFooter = ({ 
  summary, 
  title,
  extremeTempLabel,
  avgPressureLabel,
  avgSunshineLabel,
  forecastLabel,
  perDayLabel,
  weatherSummary
}: SummaryFooterProps) => (
  <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-6 mt-8 w-full">
    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-4">{title}</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{extremeTempLabel}</p>
        <p className="font-semibold">
          <span className="text-blue-600 dark:text-blue-400">{summary.extreme_temperatures.min.toFixed(1)}°C</span>
          {' - '}
          <span className="text-red-600 dark:text-red-400">{summary.extreme_temperatures.max.toFixed(1)}°C</span>
        </p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{avgPressureLabel}</p>
        <p className="font-semibold dark:text-gray-300">{summary.average_pressure.toFixed(1)} hPa</p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{avgSunshineLabel}</p>
        <p className="font-semibold dark:text-gray-300">{summary.average_sunshine_hours.toFixed(1)} {perDayLabel}</p>
      </div>
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{forecastLabel}</p>
        <p className="font-semibold capitalize dark:text-gray-300">{weatherSummary}</p>
      </div>
    </div>
  </div>
);