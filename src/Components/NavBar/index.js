import React from 'react';
import { Nav, Img, ImgContainer, SelectedImageContainer } from './styles';
import Search from '../../utils/assets/loupe.svg';
import Checked from '../../utils/assets/checked white.svg';
import Chat from '../../utils/assets/chat.svg';

const NavBar = () => {
  return (
    <Nav>
      <ImgContainer>
        <Img src={Checked} />   
      </ImgContainer>
      <SelectedImageContainer>
        <Img src={Search} />
      </SelectedImageContainer>
      <ImgContainer>
        <Img src={Chat} />
      </ImgContainer>

    </Nav>
  );
};

export default NavBar;
