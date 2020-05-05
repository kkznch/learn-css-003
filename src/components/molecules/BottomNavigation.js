import React from 'react';
import styled from 'styled-components';
import { ReactComponent as HomeSvg } from '../../assets/images/home.svg';
import { ReactComponent as SearchSvg } from '../../assets/images/search.svg';
import { ReactComponent as BellSvg } from '../../assets/images/bell.svg';
import { ReactComponent as DmSvg } from '../../assets/images/dm.svg';

const iconHeightRem = 1.8;
const iconWidthRem = 1.8;

const Wrapper = styled.div`
background-color: #18222c;
height: 100%;
width: 100%;
overflow: hidden;
`;

const Content = styled.div`
display: flex;
justify-content: space-around;
height: 100%;
width: 100%;
`;

const HomeIcon = styled(HomeSvg)`
fill: #697a86;
object-fit: contain;
height: ${iconHeightRem}rem;
width: ${iconWidthRem}rem;
padding: 0.8rem;
cursor: pointer;
`;

const SearchIcon = styled(SearchSvg)`
fill: #697a86;
object-fit: contain;
height: ${iconHeightRem}rem;
width: ${iconWidthRem}rem;
padding: 0.8rem;
`;

const BellIcon = styled(BellSvg)`
fill: #697a86;
object-fit: contain;
height: ${iconHeightRem}rem;
width: ${iconWidthRem}rem;
padding: 0.8rem;
`;

const DmIcon = styled(DmSvg)`
fill: #697a86;
object-fit: contain;
height: ${iconHeightRem}rem;
width: ${iconWidthRem}rem;
padding: 0.8rem;
`;

export default () => {
  return (
    <Wrapper>
      <Content>
        <HomeIcon></HomeIcon>
        <SearchIcon></SearchIcon>
        <BellIcon></BellIcon>
        <DmIcon></DmIcon>
      </Content>
    </Wrapper>
  );
}
