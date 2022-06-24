import styled from 'styled-components/macro';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;
  background-color: var(--dark-blue);
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  z-index: 10000;
`;

export const MenuBody = styled.div`
  background-color: var(--dark-blue);
  position: fixed;
  width: 70vw;
  height: calc(100vh - 50px);
  padding: 2rem 0;
  top: 50px;
  right: 0;
  transition: 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const MenuTitle = styled.h2`
  text-align: center;
  color: white;
  padding: 0.5rem;
  font-family: var(--lato);
  white-space: normal;
  font-weight: bold;
  font-size: 1.5rem;
  height: 15%;
  width: 100%;
`;

export const LinksList = styled.ul`
  height: 70%;
  width: 100%;
  list-style: none;
`;

export const LinkItem = styled.li`
  border-top: 1px solid white;
  color: white;
  font-weight: bold;
  font-size: 1.2rem;

  &:nth-child(1) {
    padding: 0.8rem;
  }

  &:nth-last-child(1) {
    border-bottom: 1px solid white;
  }
`;

export const SocialContainer = styled.div`
  height: 15%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const MadeBy = styled.p`
  color: white;
`;

export const SocialList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

export const GitHubIcon = styled(FaGithub)`
  color: white;
  width: 30px;
  height: 30px;
`;

export const LinkedinIcon = styled(FaLinkedin)`
  color: white;
  width: 30px;
  height: 30px;
`;
