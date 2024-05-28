import type { AppProps } from 'next/app'
import "@/styles/theme.scss";
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import ReactGA from 'react-ga';

const isProduction = process.env.NODE_ENV === 'production';  

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (isProduction) {
      ReactGA.initialize('G-DET0N5PTJ0');
      ReactGA.pageview(window.location.pathname + window.location.search);

      router.events.on('routeChangeComplete', handleRouteChange);

      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    }
  }, []);

  const handleRouteChange = (url: string) => {
    ReactGA.set({ page: url });
    ReactGA.pageview(url);
  };
  return <Component {...pageProps} />
}
