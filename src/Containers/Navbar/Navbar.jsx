import React from 'react';
import { Link } from 'react-router-dom';
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
          <Link to="/" onClick={toggleMenu}>
            Home
          </Link>
        </li>
        <li>
          <AccordionList list={regions} toggleMenu={toggleMenu}>
            Regions
          </AccordionList>
        </li>
      </styled.MenuBody>
    </styled.Nav>
  );
};

export default Navbar;
