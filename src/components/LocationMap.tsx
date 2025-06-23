import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import { Location } from '../types';
import { MapPin } from 'lucide-react';

import 'leaflet/dist/leaflet.css';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

interface LocationMapProps {
  location: Location | null;
  onLocationSelect: (location: Location) => void;
  currentLocationText: string;
  selectLocationText: string;
}

const MapClickHandler = ({ onLocationSelect }: { onLocationSelect: (location: Location) => void }) => {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng;
      onLocationSelect({ latitude: lat, longitude: lng });
    },
  });
  return null;
};

export const LocationMap = ({
  location,
  onLocationSelect,
  currentLocationText,
  selectLocationText,
}: LocationMapProps) => {
  const [selectedCity, setSelectedCity] = useState('');

  const handleCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          onLocationSelect({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          setSelectedCity('Current Location');
        },
        (error) => {
          console.error('Error getting location:', error);
        }
      );
    }
  };

  if (!location) return null;

  return (
    <div className="mb-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4">
        <div className="flex justify-between items-center mb-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">{selectLocationText}</p>
          <button
            onClick={handleCurrentLocation}
            className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
          >
            <MapPin className="w-4 h-4" />
            {currentLocationText}
          </button>
        </div>

        <div className="h-64 rounded-lg overflow-hidden">
          <MapContainer
            center={[location.latitude, location.longitude]}
            zoom={10}
            style={{ height: '100%', width: '100%' }}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[location.latitude, location.longitude]}>
              <Popup>
                {location.latitude.toFixed(4)}°, {location.longitude.toFixed(4)}°
              </Popup>
            </Marker>

            <MapClickHandler onLocationSelect={onLocationSelect} />
          </MapContainer>
        </div>
      </div>
    </div>
  );
};
