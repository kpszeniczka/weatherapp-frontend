import { CloudRain, Cloud, Sun, CloudSnow, CloudDrizzle, Zap, CloudFog } from 'lucide-react';

export const weatherIcons: { [key: number]: JSX.Element } = {
  0: <Sun className="w-8 h-8 text-yellow-500" />,
  1: <Sun className="w-8 h-8 text-yellow-400" />,
  2: <Cloud className="w-8 h-8 text-gray-400" />,
  3: <Cloud className="w-8 h-8 text-gray-500" />,
  45: <CloudFog className="w-8 h-8 text-gray-400" />,
  48: <CloudFog className="w-8 h-8 text-gray-500" />,
  51: <CloudDrizzle className="w-8 h-8 text-blue-300" />,
  53: <CloudDrizzle className="w-8 h-8 text-blue-400" />,
  55: <CloudDrizzle className="w-8 h-8 text-blue-500" />,
  56: <CloudDrizzle className="w-8 h-8 text-blue-600" />,
  57: <CloudDrizzle className="w-8 h-8 text-blue-700" />,
  61: <CloudRain className="w-8 h-8 text-blue-400" />,
  63: <CloudRain className="w-8 h-8 text-blue-500" />,
  65: <CloudRain className="w-8 h-8 text-blue-600" />,
  66: <CloudRain className="w-8 h-8 text-blue-700" />,
  67: <CloudRain className="w-8 h-8 text-blue-800" />,
  71: <CloudSnow className="w-8 h-8 text-blue-200" />,
  73: <CloudSnow className="w-8 h-8 text-blue-300" />,
  75: <CloudSnow className="w-8 h-8 text-blue-400" />,
  77: <CloudSnow className="w-8 h-8 text-blue-500" />,
  80: <CloudRain className="w-8 h-8 text-blue-400" />,
  81: <CloudRain className="w-8 h-8 text-blue-500" />,
  82: <CloudRain className="w-8 h-8 text-blue-600" />,
  85: <CloudSnow className="w-8 h-8 text-blue-300" />,
  86: <CloudSnow className="w-8 h-8 text-blue-400" />,
  95: <Zap className="w-8 h-8 text-yellow-600" />,
  96: <Zap className="w-8 h-8 text-yellow-700" />,
  99: <Zap className="w-8 h-8 text-yellow-800" />
};

export const getWeatherIcon = (code: number): JSX.Element => {
  return weatherIcons[code] || <Cloud className="w-8 h-8 text-gray-400" />;
};