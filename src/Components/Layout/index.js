/* eslint-disable react/display-name */
import React from 'react';

// Styled components
import { LayoutContainer, Title } from './styles';

// components
import NavBar from '../NavBar';
import Content from '../Content';

export const Layout = React.memo(() => {
  return (
    <LayoutContainer>
      <NavBar />
      <main>
        <Title>Resources</Title>
        <Content />
      </main>
    </LayoutContainer>
  );
});

export default Layout;
