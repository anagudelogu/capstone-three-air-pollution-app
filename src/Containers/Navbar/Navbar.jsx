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
      <Hamburger
        size={20}
        toggled={openMenu}
        toggle={toggleMenu}
        color="white"
      />
      <styled.MenuBody isOpen={openMenu}>
        <styled.MenuTitle>Air Pollution App</styled.MenuTitle>
        <styled.LinksList>
          <styled.LinkItem>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </styled.LinkItem>
          <styled.LinkItem>
            <AccordionList list={regions} toggleMenu={toggleMenu}>
              Regions
            </AccordionList>
          </styled.LinkItem>
        </styled.LinksList>
        <styled.SocialContainer>
          <styled.MadeBy>Made by Andres Agudelo</styled.MadeBy>
          <styled.SocialList>
            <li>
              <a href="https://github.com/anagudelogu/">
                <styled.GitHubIcon />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/aagst/">
                <styled.LinkedinIcon />
              </a>
            </li>
          </styled.SocialList>
        </styled.SocialContainer>
      </styled.MenuBody>
    </styled.Nav>
  );
};

export default Navbar;
