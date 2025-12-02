
import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { AlertCircle, CheckCircle, Loader2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function MintCard({
  mintedCount,
  totalSupply = 10000,
  isWalletConnected,
  userAddress,
  onMint,
  isMinting,
  isLoading = false,
  mintStatus
}) {

  const mintProgress = totalSupply > 0 ? (mintedCount / totalSupply * 100) : 0;

  return (
    <Card className="retro-card">
            <CardHeader className="flex flex-col space-y-1.5 p-6 text-center pb-0">
                <CardTitle className="text-3xl font-bold text-foreground">MINT YOUR GNARLY BRO</CardTitle>
                <CardDescription className="text-lg text-foreground font-medium">
                    BRUH, MINT YOUR GNARLY BRO
                </CardDescription>
                <p className="text-foreground pt-4 pb-8 text-lg font-medium">It's free, bro. Just pay the gas fee, it's like 0.01 cents bro.

        </p>
            </CardHeader>
            <CardContent className="px-6 py-1 space-y-6">
                <div className="space-y-3">
                    <div className="flex justify-between text-xl font-bold text-foreground">
                        <span>MINTED</span>
                        {isLoading ? (
                            <Loader2 className="w-6 h-6 animate-spin" />
                        ) : (
                            <span>{mintedCount} / {totalSupply}</span>
                        )}
                    </div>
                    <div className="w-full bg-muted border-3 border-foreground h-6">
                        <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${mintProgress}%` }} />

                    </div>
                </div>

                <div className="p-6 border-3 border-foreground text-center">
                    <p className="text-3xl font-bold text-foreground">FREE MINT</p>
                    <p className="text-sm font-medium no-underline normal-case text-muted-foreground">broooooo....dont fade this. mint it bro...it's free.</p>
                </div>
            </CardContent>
            <CardFooter className="pt-6 pr-6 pb-6 pl-6 flex flex-col items-center space-y-4">
                <ConnectButton.Custom>
                  {({
                    account,
                    chain,
                    openAccountModal,
                    openChainModal,
                    openConnectModal,
                    authenticationStatus,
                    mounted,
                  }) => {
                    const ready = mounted && authenticationStatus !== 'loading';
                    const connected =
                      ready &&
                      account &&
                      chain &&
                      (!authenticationStatus ||
                        authenticationStatus === 'authenticated');

                    return (
                      <div
                        {...(!ready && {
                          'aria-hidden': true,
                          'style': {
                            opacity: 0,
                            pointerEvents: 'none',
                            userSelect: 'none',
                          },
                        })}
                        className="w-full flex flex-col items-center space-y-4"
                      >
                        {!connected ? (
                          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                            <Button
                              onClick={openConnectModal}
                              disabled={isMinting}
                              className="retro-btn w-64 h-16 text-xl connect-wallet-btn"
                            >
                              {isMinting ? <Loader2 className="animate-spin" /> : "CONNECT WALLET"}
                            </Button>
                          </motion.div>
                        ) : (
                          <div className="text-center space-y-4 w-full">
                            <p className="text-foreground font-bold">CONNECTED: {userAddress}</p>
                            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                              <Button
                                onClick={onMint}
                                disabled={isMinting || isLoading || mintedCount >= totalSupply}
                                className="retro-btn w-64 h-16 text-xl mint-now-btn"
                              >
                                {isMinting ? <Loader2 className="animate-spin" /> : "MINT NOW"}
                              </Button>
                            </motion.div>
                          </div>
                        )}
                      </div>
                    );
                  }}
                </ConnectButton.Custom>
                
                {mintStatus.message &&
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`flex items-center gap-2 p-3 border-2 border-foreground w-full justify-center font-bold ${
          mintStatus.isError ? 'bg-destructive/20 text-destructive' :
          mintStatus.isSuccess ? 'bg-monad-cyan/20 text-foreground' : 'bg-monad-purple/20 text-foreground'}`
          }>

                        {mintStatus.isError && <AlertCircle className="w-5 h-5" />}
                        {mintStatus.isSuccess && <CheckCircle className="w-5 h-5" />}
                        {!mintStatus.isError && !mintStatus.isSuccess && isMinting && <Loader2 className="w-5 h-5 animate-spin" />}
                        <span>{mintStatus.message}</span>
                    </motion.div>
        }
            </CardFooter>
        </Card>);

}
