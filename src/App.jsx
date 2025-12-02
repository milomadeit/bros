import './App.css'
import Pages from "@/pages/index.jsx"
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from "@/contexts/ThemeContext"
import { WagmiProvider } from 'wagmi'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { config } from "@/config/rainbowKit"
import RainbowKitThemeProvider from "@/components/RainbowKitThemeProvider"

const queryClient = new QueryClient()

function App() {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider>
          <RainbowKitThemeProvider>
            <Pages />
            <Toaster />
          </RainbowKitThemeProvider>
        </ThemeProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}

export default App 