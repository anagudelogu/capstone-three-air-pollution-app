import styled from 'styled-components/macro';

export const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 50px;
  background-color: pink;
  width: 100vw;
  display: flex;
  justify-content: flex-end;
  z-index: 10000;
`;

export const MenuBody = styled.ul`
  background-color: red;
  list-style: none;
  position: fixed;
  width: 50vw;
  top: 50px;
  right: 0;
  transition: 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
`;
