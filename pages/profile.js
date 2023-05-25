import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';


export default function Profile() {
  return(
    <>
      <Head>
      <link rel="shortcut icon" type="image/png" href="/Am-2.png" />
        <meta charSet="utf-8" />
        <title>Move | 프로필</title>
      </Head>
      <AppLayout>
        <div>로그인 시 프로필화면</div>
      </AppLayout>
      
    </>
  );
};

