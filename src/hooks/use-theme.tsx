
import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem('theme') as Theme) || 
          (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  );

  useEffect(() => {
    const root = window.document.documentElement;
    
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
    
    // Update CSS variables based on theme
    if (theme === 'dark') {
      // Whimsical dark mode colors
      document.documentElement.style.setProperty('--primary-color', '#9b87f5');
      document.documentElement.style.setProperty('--background-color', '#1A1F2C');
      document.documentElement.style.setProperty('--card-background', '#222222');
      document.documentElement.style.setProperty('--text-primary', '#ffffff');
      document.documentElement.style.setProperty('--text-secondary', '#9F9EA1');
      document.documentElement.style.setProperty('--border-color', '#333333');
    } else {
      // Whimsical light mode colors
      document.documentElement.style.setProperty('--primary-color', '#9b87f5');
      document.documentElement.style.setProperty('--background-color', '#FFFFFF');
      document.documentElement.style.setProperty('--card-background', '#FFFFFF');
      document.documentElement.style.setProperty('--text-primary', '#333333');
      document.documentElement.style.setProperty('--text-secondary', '#555555');
      document.documentElement.style.setProperty('--border-color', '#F1F1F1');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
};
