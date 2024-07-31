// pages/_app.js
import React from 'react';
import Head from 'next/head';
import OpenGraphTag from '@/domains/opentag';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Head>
          <OpenGraphTag />
        </Head>
        <Component {...pageProps} />
      </>
  );
}

export default MyApp;