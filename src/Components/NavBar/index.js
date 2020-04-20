import React from 'react';
import { Nav, Img } from './styles';
import Search from '../../utils/assets/icons8-search-50.png';
import Checked from '../../utils/assets/icons8-checked-50.png';
import Chat from '../../utils/assets/icons8-chat-50.png';

const NavBar = () => {
  return (
    <Nav>
      <Img src={Checked} />
      <Img src={Search} />
      <Img src={Chat} />
    </Nav>
  );
};

export default NavBar;
