import React from 'react';
import ThemeToggle from '@/components/ThemeToggle';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Header() {
  return (
    <header className="text-center py-6 pt-20 md:py-10 md:pt-10 relative px-4">
      <div 
        className="absolute top-2 right-2 md:top-8 md:right-8 flex items-center gap-2 md:gap-3 theme-toggle-container" 
        style={{ 
          zIndex: 9999, 
          pointerEvents: 'auto' 
        }}
      >
        <div className="scale-90 md:scale-100">
          <ConnectButton />
        </div>
        <div className="scale-90 md:scale-100">
          <ThemeToggle />
        </div>
      </div>
      <h1 className="text-4xl sm:text-5xl md:text-8xl font-bold mb-2 md:mb-4 relative px-2" style={{
        color: '#6E54FF',
        textShadow: '4px 4px 0px hsl(var(--shadow-color))',
        zIndex: 1
      }}>
        GNARLY BROS
      </h1>
      <p className="text-base md:text-2xl font-bold text-foreground">Built on Monad</p>
    </header>
  );
}