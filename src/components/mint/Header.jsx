import React from 'react';
import ThemeToggle from '@/components/ThemeToggle';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Header() {
  return (
    <header className="text-center py-10 relative">
      <div 
        className="absolute top-4 right-4 md:top-8 md:right-8 flex items-center gap-3 theme-toggle-container" 
        style={{ 
          zIndex: 9999, 
          pointerEvents: 'auto' 
        }}
      >
        <ConnectButton />
        <ThemeToggle />
      </div>
      <h1 className="text-6xl md:text-8xl font-bold mb-4 relative" style={{
        color: '#6E54FF',
        textShadow: '6px 6px 0px hsl(var(--shadow-color))',
        zIndex: 1
      }}>
        GNARLY BROS
      </h1>
      <p className="text-xl md:text-2xl font-bold text-foreground">Built on Monad</p>
    </header>
  );
}