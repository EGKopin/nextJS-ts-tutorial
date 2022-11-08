//This file wraps every other page
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout';
import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';

//this will extend the props to here, which is needed because this is TS. we would NOT need this if just JS
type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode //where getLayout is optional with the the  ?:
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}
 
function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  //This is an 'optional function' where it can use the Layout or not
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    getLayout(<Component {...pageProps} />)
  );
}

export default MyApp;