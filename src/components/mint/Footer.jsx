
import React from 'react';
import { Button } from "@/components/ui/button";
import { Twitter, Globe } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="w-full p-8 text-center">
            <div className="flex justify-center items-center space-x-6">
                <Button variant="ghost" size="icon" asChild className="retro-btn bg-card hover:bg-accent">
                    <a href="https://x.com/brosgnarly" target="_blank" rel="noopener noreferrer" className="text-foreground">
                        <Twitter className="w-8 h-8" />
                    </a>
                </Button>
                <Button variant="ghost" size="icon" asChild className="retro-btn bg-card hover:bg-accent">
                    <a href="https://monadscan.com/" target="_blank" rel="noopener noreferrer" className="text-foreground">
                        <Globe className="w-8 h-8" /> 
                    </a>
                </Button>
            </div>
            <p className="text-foreground text-lg font-bold mt-6">GNARLY BROS • 2025 • BUILT ON MONAD</p>
        </footer>
    );
}
