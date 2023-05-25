import React from 'react';
import { Menu } from 'antd';
import Link from 'next/link';
import PropTypes from 'prop-types';

export default function AppLayout({ children }) {
  
  return(
    <>
      <Menu mode="horizontal">
        <Menu.Item>
          <Link href="/">Move Logo</Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/">Home</Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/profile">프로필</Link>
        </Menu.Item>
        <Menu.Item>
          <Link href="/signup">로그인/ 회원가입</Link>
        </Menu.Item>
      </Menu>
        {children}
      
    </>
  );
};

AppLayout.propTypes = {
  children:PropTypes.node.isRequired,
};
