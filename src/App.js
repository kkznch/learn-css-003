import React from 'react';
import styled from 'styled-components';
import News from './components/pages/News';
import TopNavigation from './components/molecules/TopNavigation';

const App = styled.div`
height: 1082.67px;
width: 500px;
`;

const Header = styled.header`
width: 100%;
`;

const Content = styled.div`
width: 100%;
`;

const Footer = styled.footer`
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
      <Footer></Footer>
    </App>
  );
}
