// Monad Mainnet Configuration
// IMPORTANT: Vite requires VITE_ prefix for client-side environment variables
// Your .env file variables must be prefixed with VITE_ to be accessible
export const MONAD_CONFIG = {
  chainId: import.meta.env.VITE_MONAD_MAINNET_ID 
    ? parseInt(import.meta.env.VITE_MONAD_MAINNET_ID) 
    : 1, // Fallback chain ID
  rpcUrl: import.meta.env.VITE_MONAD_MAINNET_RPC || '',
  blockExplorer: import.meta.env.VITE_MONAD_MAINNET_BLOCKEXPLORER || '',
  currencySymbol: import.meta.env.VITE_MONAD_MAINNET_CURR_SYMBOL || 'MON',
  contractAddress: import.meta.env.VITE_CONTRACT_ADDRESS || '',
  contractName: import.meta.env.VITE_CONTRACT_NAME || 'GNARLY BROS',
};

// Standard ERC721 Mint ABI - adjust if your contract uses different functions
export const MINT_ABI = [
  "function mint(uint256 quantity) public payable",
  "function totalSupply() public view returns (uint256)",
  "function name() public view returns (string)",
  "function maxSupply() public view returns (uint256)",
  "function price() public view returns (uint256)",
  "function minted() public view returns (uint256)",
  "function mintStatus() public view returns (bool)",
];

// Monad Mainnet Chain Configuration for MetaMask
// This function returns the chain config dynamically
export const getMonadChainConfig = () => ({
  chainId: `0x${MONAD_CONFIG.chainId.toString(16)}`,
  chainName: 'Monad Mainnet',
  nativeCurrency: {
    name: MONAD_CONFIG.currencySymbol,
    symbol: MONAD_CONFIG.currencySymbol,
    decimals: 18,
  },
  rpcUrls: [MONAD_CONFIG.rpcUrl],
  blockExplorerUrls: [MONAD_CONFIG.blockExplorer],
});

// Keep backward compatibility
export const MONAD_CHAIN_CONFIG = getMonadChainConfig();

