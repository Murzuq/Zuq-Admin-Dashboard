import { useEffect, useState } from 'react';

export default function useDarkMode() {
  const [theme, setTheme] = useState<string>(() => {
    // Check if running in browser environment
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      // If user has a saved preference, use it
      if (savedTheme) {
        return savedTheme;
      }
      // Otherwise check system preference
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
      }
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return { theme, toggleTheme };
}
