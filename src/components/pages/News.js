import React from 'react';
import styled from 'styled-components';
import NewsNavigation from '../molecules/NewsNavigation';
import NewsContent from '../molecules/NewsContent';

const headerHeightRem = 3.0;

const Wrapper = styled.div`
background-color: #18222c;
height: 100%;
width: 100%;
`;

const Header = styled.header`
height: ${headerHeightRem}rem;
width: 100%;
`;

const Content = styled.div`
height: calc(100% - ${headerHeightRem}rem);
width: 100%;
`;

const Footer = styled.footer`
width: 100%;
`;

export default () => {
  return (
    <Wrapper>
      <Header>
        <NewsNavigation></NewsNavigation>
      </Header>
      <Content>
        <NewsContent></NewsContent>
      </Content>
      <Footer></Footer>
    </Wrapper>
  );
}
