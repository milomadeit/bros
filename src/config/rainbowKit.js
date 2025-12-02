import { getDefaultConfig } from '@rainbow-me/rainbowkit';
import { monadMainnet } from './wagmi';

// Create Rainbow Kit config with Monad mainnet
// This config includes MetaMask, Rabby, and Phantom wallet support
export const config = getDefaultConfig({
  appName: 'Gnarly Bros',
  projectId: import.meta.env.VITE_WALLET_CONNECT_PROJECT_ID || 'YOUR_PROJECT_ID', // Get from https://cloud.walletconnect.com
  chains: [monadMainnet],
  ssr: false,
});

// Export the config and chains for use in providers
export { monadMainnet };
