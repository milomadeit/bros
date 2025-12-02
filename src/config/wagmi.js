import { defineChain } from 'viem';

// Monad Mainnet Chain Definition
export const monadMainnet = defineChain({
  id: parseInt(import.meta.env.VITE_MONAD_MAINNET_ID) || 1,
  name: 'Monad Mainnet',
  network: 'monad',
  nativeCurrency: {
    name: import.meta.env.VITE_MONAD_MAINNET_CURR_SYMBOL || 'MON',
    symbol: import.meta.env.VITE_MONAD_MAINNET_CURR_SYMBOL || 'MON',
    decimals: 18,
  },
  rpcUrls: {
    default: {
      http: [import.meta.env.VITE_MONAD_MAINNET_RPC || ''],
    },
  },
  blockExplorers: {
    default: {
      name: 'Monadscan',
      url: import.meta.env.VITE_MONAD_MAINNET_BLOCKEXPLORER || '',
    },
  },
  testnet: false,
});

