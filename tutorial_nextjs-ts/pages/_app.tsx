//This file wraps every other page
import '../styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    Anything from _app is everywhere!
  <Component {...pageProps} />
  </>
  );
}
