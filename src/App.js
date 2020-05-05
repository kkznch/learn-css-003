import React from 'react';
import styled from 'styled-components';
import News from './components/pages/News';
import TopNavigation from './components/molecules/TopNavigation';
import BottomNavigation from './components/molecules/BottomNavigation';

const headerHeightRem = 3.0;
const footerHeightRem = 6.4;

const App = styled.div`
display: flex;
flex-direction: column;
height: 100vh;
width: 100%;
`;

const Header = styled.header`
height: ${headerHeightRem}rem;
width: 100%;
`;

const Content = styled.div`
flex: 1;
height: calc(100% - ${headerHeightRem}rem - ${footerHeightRem}rem);
width: 100%;
`;

const Footer = styled.footer`
height: ${footerHeightRem}rem;
width: 100%;
`;

export default () => {
  return (
    <App>
      <Header>
        <TopNavigation></TopNavigation>
      </Header>
      <Content>
        <News></News>
      </Content>
      <Footer>
        <BottomNavigation></BottomNavigation>
      </Footer>
    </App>
  );
}
