import React, { createContext, useContext } from 'react';
import { DefaultTheme, AppTheme } from './theme';

const ThemeContext = createContext<AppTheme>(DefaultTheme);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeContext.Provider value={DefaultTheme}>
      {children}
    </ThemeContext.Provider>
  );
};