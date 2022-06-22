import React from 'react';
import { Twirl as Hamburger } from 'hamburger-react';
import AccordionList from '../../Components/AccordionList/AccordionList';
import useToggle from '../../Hooks/useToggle';
import regions from '../../Helpers/regionsArr';
import * as styled from './navbarStyles';

const Navbar = () => {
  const { state: openMenu, toggleState: toggleMenu } = useToggle();
  return (
    <styled.Nav>
      <Hamburger size={20} toggled={openMenu} toggle={toggleMenu} />
      <styled.MenuBody isOpen={openMenu}>
        <li>
          <AccordionList list={regions}>Regions</AccordionList>
        </li>
      </styled.MenuBody>
    </styled.Nav>
  );
};

export default Navbar;
