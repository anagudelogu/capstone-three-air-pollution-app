import styled from 'styled-components/macro';
import { MdExpandMore } from 'react-icons/md';

export const ExpandibleButton = styled.button`
  appearance: none;
  outline: none;
  background-color: transparent;
  border: none;
  color: white;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 0.8rem;
`;

export const ExpandIcon = styled(MdExpandMore)`
  transition: 0.3s ease;
  transform: ${(props) => (props.isOpen ? 'rotate(-90deg)' : 'rotate(0deg)')};
  width: 20px;
  height: 20px;
`;

export const ExpandedList = styled.ul`
  list-style: none;
  background-color: var(--mid-blue);
`;

export const ListItem = styled.li`
  padding: 0.7rem 2rem;
  border-top: 1px solid white;
`;
