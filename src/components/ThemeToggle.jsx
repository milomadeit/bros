import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    toggleTheme();
  };

  return (
    <Button
      onClick={handleClick}
      variant="ghost"
      size="icon"
      className="retro-btn bg-background hover:bg-accent border-foreground text-foreground"
      aria-label="Toggle theme"
      style={{ 
        pointerEvents: 'auto', 
        cursor: 'pointer',
        zIndex: 9999,
        position: 'relative'
      }}
      type="button"
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5" />
      )}
    </Button>
  );
}
