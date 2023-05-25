import React from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import LoginForm from '../components/LoginForm';

export default function Signup() {
  return(
    <>
      <Head>
      <link rel="shortcut icon" type="image/png" href="/Am-2.png" />
        <meta charSet="utf-8" />
        <title>Move | 회원가입</title>
      </Head>
      <AppLayout>
        <LoginForm />
        <div> 회원가입 화면 </div>
        {/* Antd를 사용할지 다른 라이브러리를 사용할지는 아직 미정 */}
        {/* input이랑 다 만들기 */}
        {/* 소셜로그인 할 수 있도록  API 불러오기 */}
      </AppLayout>
    </>
  );
};

