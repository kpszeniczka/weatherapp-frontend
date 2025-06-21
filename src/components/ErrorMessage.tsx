import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
    <div className="flex items-center">
      <AlertCircle className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" />
      <p className="text-red-700">{message}</p>
    </div>
  </div>
);