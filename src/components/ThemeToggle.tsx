import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

export const ThemeToggle = ({ theme, toggleTheme }: ThemeToggleProps) => (
  <button
    onClick={toggleTheme}
    className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
    aria-label="Toggle theme"
  >
    {theme === 'light' ? (
      <Moon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
    ) : (
      <Sun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
    )}
  </button>
);