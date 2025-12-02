# GNARLY BROS - Monad Mainnet Mint Page

A minting page for GNARLY BROS NFT collection built on Monad Mainnet using React, Vite, and ethers.js.

## Setup

### Environment Variables

**IMPORTANT:** Vite requires the `VITE_` prefix for client-side environment variables. Add these to your `.env` file in the root directory:

```env
VITE_CONTRACT_ADDRESS=0xYourContractAddressHere
VITE_CONTRACT_NAME=GNARLY BROS
VITE_MONAD_MAINNET_RPC=https://your-rpc-url-here
VITE_MONAD_MAINNET_ID=1
VITE_MONAD_MAINNET_BLOCKEXPLORER=https://your-blockexplorer-url-here
VITE_MONAD_MAINNET_CURR_SYMBOL=MON
```

**Note:** `VITE_CONTRACT_OWNER_KEY` is not needed for the frontend (only for backend operations if needed).

## Running the app

```bash
npm install
npm run dev
```

## Building the app

```bash
npm run build
```

## Features

- ✅ Monad Mainnet integration with ethers.js
- ✅ Automatic network switching to Monad Mainnet
- ✅ Real-time mint count from contract
- ✅ Wallet connection with MetaMask
- ✅ Transaction status updates with block explorer links
- ✅ Responsive design with retro styling

## Contract Requirements

The mint page expects an ERC721 contract with the following functions:
- `mint(uint256 quantity)` - Public mint function
- `totalSupply()` - Returns current number of minted tokens
- `maxSupply()` (optional) - Returns maximum supply
- `name()` - Returns contract name

Adjust the ABI in `src/config/monad.js` if your contract uses different function signatures.