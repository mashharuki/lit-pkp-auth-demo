import { StytchProvider } from '@stytch/nextjs';
import { createStytchUIClient } from '@stytch/nextjs/ui';
import { AppProps } from 'next/app';
import { Albert_Sans } from 'next/font/google';
import { WagmiConfig, configureChains, createClient } from 'wagmi';
import { goerli, mainnet, optimism } from 'wagmi/chains';
import { CoinbaseWalletConnector } from 'wagmi/connectors/coinbaseWallet';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { publicProvider } from 'wagmi/providers/public';
import Footer from '../components/Footer';
import Header from '../components/Header';
import '../styles/globals.css';

const { provider, chains } = configureChains(
  [mainnet, goerli, optimism],
  [publicProvider()]
);

const client = createClient({
  autoConnect: false,
  connectors: [
    new MetaMaskConnector({
      chains,
      options: {
        UNSTABLE_shimOnConnectSelectAccount: true,
      },
    }),
    new CoinbaseWalletConnector({
      chains,
      options: {
        appName: 'wagmi',
      },
    }),
  ],
  provider,
});

const stytch = createStytchUIClient(
  process.env.NEXT_PUBLIC_STYTCH_PUBLIC_TOKEN || ''
);

const font = Albert_Sans({ subsets: ['latin'] });

/**
 * MyApp Component
 * @param param0 
 * @returns 
 */
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StytchProvider stytch={stytch}>
      <WagmiConfig client={client}>
        <Header/>
        <main className={font.className}>
          <Component {...pageProps} />
        </main>
        <Footer/>
      </WagmiConfig>
    </StytchProvider>
  );
}
