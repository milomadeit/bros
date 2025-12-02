
import React from 'react';

export default function Layout({ children }) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
        
        html {
          background-color: hsl(var(--background));
          color: hsl(var(--foreground));
        }
        body {
          font-family: 'Space Mono', monospace;
          background-color: hsl(var(--background));
          color: hsl(var(--foreground));
          image-rendering: -moz-crisp-edges;
          image-rendering: -webkit-crisp-edges;
          image-rendering: pixelated;
          image-rendering: crisp-edges;
          min-height: 100vh;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .pixelated {
          image-rendering: -moz-crisp-edges;
          image-rendering: -webkit-crisp-edges;
          image-rendering: pixelated;
          image-rendering: crisp-edges;
        }
        
        .punk-marquee-container {
          overflow: hidden;
          width: 100%;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 2px solid hsl(var(--border-color));
          padding: 20px 0;
          transition: background-color 0.3s ease, border-color 0.3s ease;
        }
        
        .dark .punk-marquee-container {
          background: hsl(var(--background));
        }

        .punk-marquee {
          display: flex;
          animation: marquee 60s linear infinite;
          will-change: transform;
        }

        .punk-marquee img {
          width: 100px;
          height: 100px;
          margin: 0 15px;
          border: 3px solid hsl(var(--border-color));
          box-shadow: 5px 5px 0px hsl(var(--shadow-color));
          background: #fff;
          flex-shrink: 0;
          transition: border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;
        }
        
        .dark .punk-marquee img {
          background: hsl(var(--card));
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-3900px); }
        }

        @media (max-width: 768px) {
          .punk-marquee {
            animation: marquee 60s linear infinite;
          }
        }

        .retro-card {
          border-radius: 0 !important;
          background: rgba(255, 255, 255, 0.95);
          border: 3px solid hsl(var(--border-color));
          box-shadow: 8px 8px 0px hsl(var(--shadow-color));
          transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        
        .dark .retro-card {
          background: hsl(var(--card));
        }

        .retro-card * {
          border-radius: 0 !important;
        }

        .retro-btn {
          border-radius: 0 !important;
          border: 3px solid hsl(var(--border-color)) !important;
          box-shadow: 4px 4px 0px hsl(var(--shadow-color)) !important;
          transition: all 0.1s ease !important;
          text-transform: uppercase;
          font-weight: bold;
        }

        .border-3 {
          border-width: 3px !important;
          border-radius: 0 !important;
        }

        .retro-btn:hover {
          transform: translate(-2px, -2px);
          box-shadow: 6px 6px 0px hsl(var(--shadow-color)) !important;
        }

        .retro-btn:active {
          transform: translate(2px, 2px);
          box-shadow: 2px 2px 0px hsl(var(--shadow-color)) !important;
        }
        
        /* Ensure theme toggle is always clickable */
        .theme-toggle-container {
          pointer-events: auto !important;
          z-index: 9999 !important;
        }
        
        .theme-toggle-container button {
          pointer-events: auto !important;
          cursor: pointer !important;
          z-index: 9999 !important;
          position: relative !important;
        }
        
        header {
          pointer-events: auto;
        }
        
        /* Mobile header adjustments */
        @media (max-width: 768px) {
          header {
            min-height: 120px;
          }
        }
        
        /* Ensure header text stays on one line and scales properly */
        header h1 {
          white-space: nowrap;
          overflow: visible;
          transform: translateX(0);
        }
        
        /* Account for button space on mobile without constraining text size */
        @media (max-width: 480px) {
          header h1 {
            padding-left: 0.25rem;
            padding-right: 0.25rem;
          }
        }
        
        /* Rainbow Kit ConnectButton - Monad Purple styling (only the header button) */
        header [data-rk] button,
        header button[aria-label*="Connect"],
        header [data-rk] > div > button {
          background-color: #6E54FF !important;
          color: #FFFFFF !important;
          font-size: 0.875rem !important;
          padding: 0.5rem 0.75rem !important;
        }
        
        @media (min-width: 768px) {
          header [data-rk] button,
          header button[aria-label*="Connect"],
          header [data-rk] > div > button {
            font-size: 1rem !important;
            padding: 0.625rem 1rem !important;
          }
        }
        
        header [data-rk] button:hover,
        header button[aria-label*="Connect"]:hover,
        header [data-rk] > div > button:hover {
          background-color: #5a42e6 !important;
        }
        
        /* Connect Wallet Button in MintCard - Monad Purple */
        .connect-wallet-btn {
          background-color: #6E54FF !important;
          color: #FFFFFF !important;
        }
        
        .connect-wallet-btn:hover {
          background-color: #5a42e6 !important;
        }
        
        /* Mint Now Button - Monad Purple */
        .mint-now-btn {
          background-color: #6E54FF !important;
          color: #FFFFFF !important;
        }
        
        .mint-now-btn:hover:not(:disabled) {
          background-color: #5a42e6 !important;
        }
        
        .mint-now-btn:disabled {
          opacity: 0.5 !important;
        }
      `}</style>
      <div className="min-h-screen">
        {children}
      </div>
    </>
  );
}
