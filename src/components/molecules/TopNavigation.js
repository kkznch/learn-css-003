import React from 'react';
import styled from 'styled-components';
import mePng from '../../assets/images/me.png';
import { ReactComponent as SearchSvg } from '../../assets/images/search.svg';
import { ReactComponent as SettingSvg } from '../../assets/images/setting.svg';

const Wrapper = styled.div`
background-color: #18222c;
height: 3.8rem;
width: 100%;
`;

const Content = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100%;
width: 100%;
`;

const Left = styled.div`
display: flex;
flex: 1;
align-items: center;
justify-content: center;
height: 100%;
width: 100%;
`;

const Center = styled.div`
display: flex;
flex: 4;
align-items: center;
justify-content: center;
height: 100%;
width: 100%;
`;

const Right = styled.div`
display: flex;
flex: 1;
align-items: center;
justify-content: center;
height: 100%;
width: 100%;
`;

const MeIcon = styled.img`
border-radius: 50%;
object-fit: contain;
height: 3.2rem;
width: 3.2rem;
`;

const SearchBar = styled.div`
background-color: #10171f;
display: flex;
flex: auto;
justify-content: center;
align-items: center;
border-radius: 24px;
height: 80%;
width: 100%;
`;

const SearchIcon = styled(SearchSvg)`
fill: #697a86;
object-fit: contain;
height: 1.6rem;
width: 1.6rem;
`;

const SearchInput = styled.input`
background-color: #10171e;
color: white;
margin-left: 0.6rem;
border: none;
font-size: 1.4rem;
height: 2rem;
width: 10rem;
`;

const searchPlaceholder = 'キーワード検索';

const SettingIcon = styled(SettingSvg)`
fill: #1e92da;
object-fit: contain;
height: 2rem;
width: 2rem;
`;

export default () => {
  return (
    <Wrapper>
      <Content>
        <Left>
          <MeIcon src={mePng}></MeIcon>
        </Left>
        <Center>
          <SearchBar>
            <SearchIcon></SearchIcon>
            <SearchInput placeholder={searchPlaceholder}></SearchInput>
          </SearchBar>
        </Center>
        <Right>
          <SettingIcon></SettingIcon>
        </Right>
      </Content>
    </Wrapper>
  );
}
