import { DailyForecast } from '../types';
import { DayColumn } from './';

interface WeatherTableProps {
  forecast: DailyForecast[];
  maxLabel: string;
  minLabel: string;
  sunLabel: string;
  energyLabel: string;
}

export const WeatherTable = ({ 
  forecast, 
  maxLabel, 
  minLabel, 
  sunLabel, 
  energyLabel 
}:WeatherTableProps) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 mb-8">
    {forecast.map((day) => (
      <DayColumn 
        key={day.date} 
        day={day} 
        maxLabel={maxLabel}
        minLabel={minLabel}
        sunLabel={sunLabel}
        energyLabel={energyLabel}
      />
    ))}
  </div>
);