import React from 'react';
import { Languages } from 'lucide-react';
import { Language } from '../hooks';

interface LanguageToggleProps {
  language: Language;
  toggleLanguage: () => void;
}

export const LanguageToggle = ({ language, toggleLanguage }: LanguageToggleProps) => (
  <button
    onClick={toggleLanguage}
    className="flex items-center gap-2 p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
    aria-label="Toggle language"
  >
    <Languages className="w-5 h-5 text-gray-700 dark:text-gray-300" />
    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
      {language.toUpperCase()}
    </span>
  </button>
);