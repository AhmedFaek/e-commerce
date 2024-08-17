
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppProps } from 'next/app';
import { CartProvider } from 'react-use-cart';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;
