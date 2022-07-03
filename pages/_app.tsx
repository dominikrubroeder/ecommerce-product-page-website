import '../styles/globals.css';
import type { AppProps } from 'next/app';
import CartProvider from '../store/CartContext';
import PageLayout from '../components/layout/PageLayout';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </CartProvider>
  );
}

export default MyApp;
