import React, { useState, useEffect } from "react";
import { useAccount, useSwitchChain, useReadContract, useWriteContract, useWaitForTransactionReceipt } from "wagmi";
import { formatAddress } from "@/utils/index";
import Header from "../components/mint/Header";
import PunkGallery from "../components/mint/PunkGallery";
import MintCard from "../components/mint/MintCard";
import AboutCard from "../components/mint/AboutCard";
import Footer from "../components/mint/Footer";
import { motion } from "framer-motion";
import { MONAD_CONFIG, MINT_ABI } from "../config/monad";
import { monadMainnet } from "../config/wagmi";

export default function MintPage() {
  const { address, isConnected, chainId } = useAccount();
  const { switchChain } = useSwitchChain();
  const { writeContract, data: hash, isPending: isMinting, error: writeError } = useWriteContract();
  const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
    hash,
  });

  const [mintStatus, setMintStatus] = useState({ message: '', isError: false, isSuccess: false });
  
  // Format address for display
  const userAddress = address ? formatAddress(address) : "";

  // Read contract data
  const { data: totalSupply, isLoading: isLoadingSupply } = useReadContract({
    address: MONAD_CONFIG.contractAddress,
    abi: MINT_ABI,
    functionName: 'totalSupply',
    chainId: monadMainnet.id,
    query: {
      enabled: isConnected && chainId === monadMainnet.id && !!MONAD_CONFIG.contractAddress,
    },
  });

  const { data: maxSupply, isLoading: isLoadingMaxSupply } = useReadContract({
    address: MONAD_CONFIG.contractAddress,
    abi: MINT_ABI,
    functionName: 'maxSupply',
    chainId: monadMainnet.id,
    query: {
      enabled: isConnected && chainId === monadMainnet.id && !!MONAD_CONFIG.contractAddress,
    },
  });

  const mintedCount = totalSupply ? Number(totalSupply) : 0;
  const totalSupplyValue = maxSupply ? Number(maxSupply) : 3333;
  const isLoading = isLoadingSupply || isLoadingMaxSupply;

  // Wallet connection is now handled by Rainbow Kit ConnectButton

  // Handle chain switching
  useEffect(() => {
    if (isConnected && chainId && chainId !== monadMainnet.id) {
      setMintStatus({ 
        message: 'Please switch to Monad Mainnet to continue.', 
        isError: true, 
        isSuccess: false 
      });
      // Automatically switch chain
      switchChain({ chainId: monadMainnet.id });
    } else if (isConnected && chainId === monadMainnet.id) {
      setMintStatus({ message: 'Wallet Connected!', isError: false, isSuccess: true });
      setTimeout(() => setMintStatus({ message: '', isError: false, isSuccess: false }), 4000);
    }
  }, [isConnected, chainId, switchChain]);

  // Handle mint transaction
  const handleMint = async () => {
    if (!isConnected) {
      setMintStatus({ message: 'Wallet not connected.', isError: true, isSuccess: false });
      return;
    }

    if (chainId !== monadMainnet.id) {
      setMintStatus({ 
        message: 'Please switch to Monad Mainnet to mint.', 
        isError: true, 
        isSuccess: false 
      });
      switchChain({ chainId: monadMainnet.id });
      return;
    }

    setMintStatus({ message: 'Confirm transaction in your wallet...', isError: false, isSuccess: false });

    try {
      writeContract({
        address: MONAD_CONFIG.contractAddress,
        abi: MINT_ABI,
        functionName: 'mint',
        args: [BigInt(1)],
        value: BigInt(0), // Free mint
        chainId: monadMainnet.id,
      });
    } catch (error) {
      console.error("Minting error:", error);
      setMintStatus({ 
        message: error?.message || 'Transaction failed. Please try again.', 
        isError: true, 
        isSuccess: false 
      });
    }
  };

  // Handle transaction status
  useEffect(() => {
    if (isMinting) {
      setMintStatus({ message: 'Submitting transaction...', isError: false, isSuccess: false });
    }
    if (isConfirming && hash) {
      setMintStatus({ message: 'Transaction submitted! Waiting for confirmation...', isError: false, isSuccess: false });
    }
    if (isConfirmed && hash) {
      setMintStatus({ 
        message: `Mint Successful! View on explorer: ${MONAD_CONFIG.blockExplorer}/tx/${hash}`, 
        isError: false, 
        isSuccess: true 
      });
      setTimeout(() => setMintStatus({ message: '', isError: false, isSuccess: false }), 8000);
    }
    if (writeError) {
      let errorMessage = 'Transaction failed.';
      if (writeError.message) {
        errorMessage = writeError.message;
      }
      setMintStatus({ message: errorMessage, isError: true, isSuccess: false });
    }
  }, [isMinting, isConfirming, isConfirmed, hash, writeError]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="px-4 py-2 flex-grow flex flex-col items-center justify-center md:p-8 space-y-8">
        <PunkGallery />

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full max-w-xl">
          <AboutCard />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full max-w-xl">
          <MintCard
            mintedCount={mintedCount}
            totalSupply={totalSupplyValue}
            isWalletConnected={isConnected}
            userAddress={userAddress}
            onMint={handleMint}
            isMinting={isMinting || isConfirming}
            isLoading={isLoading}
            mintStatus={mintStatus}
          />
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
