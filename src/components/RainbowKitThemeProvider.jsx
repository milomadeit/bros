import React from 'react';
import { RainbowKitProvider, darkTheme, lightTheme } from '@rainbow-me/rainbowkit';
import { useTheme } from '@/contexts/ThemeContext';

export default function RainbowKitThemeProvider({ children }) {
  const { theme } = useTheme();
  
  // Map our theme to Rainbow Kit theme object (no custom accent color)
  const rainbowKitTheme = theme === 'dark' ? darkTheme() : lightTheme();

  return (
    <RainbowKitProvider theme={rainbowKitTheme}>
      {children}
    </RainbowKitProvider>
  );
}

