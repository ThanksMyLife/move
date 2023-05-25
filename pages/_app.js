import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { StyleProvider } from '@ant-design/cssinjs';


export default function Move({ Component, pageProps }) {
  return(
    <StyleProvider hashPriority="high">
      <Head>
      <link rel="shortcut icon" type="image/png" href="/Am-2.png" />
        <meta charSet="utf-8" />
        <title>Move</title>
      </Head>
      <Component {...pageProps}/>
      <div>공통메뉴</div>
    </StyleProvider>
  );
};

Move.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.any.isRequired,
};

