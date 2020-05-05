import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
background-color: #18222c;
overflow-x: auto;
height: 100%;
width: 100%;
`;

const Content = styled.div`
display: flex;

align-items: center;
height: 100%;
width: 100%;
`;

const Item = styled.div`
flex: none;
color: #697a86;
font-size: 1.1rem;
margin-left: 1.2rem;
`;

export default () => {
  return (
    <Wrapper>
      <Content>
        <Item>おすすめ</Item>
        <Item>トレンド</Item>
        <Item>ニュース</Item>
        <Item>スポーツ</Item>
        <Item>ユーモア</Item>
        <Item>エンターテインメント</Item>
      </Content>
    </Wrapper>
  );
}
