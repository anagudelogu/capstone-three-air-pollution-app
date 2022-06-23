import styled from 'styled-components/macro';
import { BsArrowRightCircle } from 'react-icons/bs';

export const CardContainer = styled.li`
  background-color: var(--mid-blue);
  &:nth-child(4n + 1),
  &:nth-child(4n + 4) {
    background-color: var(--mid2-blue);
  }
  width: 50%;
  min-height: 150px;
  max-height: 150px;
`;

export const InfoWrapper = styled.div`
  display: grid;
  grid-template-areas:
    'flag flag pass'
    'text text text'
    'text text text';
  position: relative;
`;

export const Flag = styled.img`
  grid-area: flag;
  border: 1px solid white;
  max-height: 60px;
`;

export const Textcontainer = styled.div`
  grid-area: text;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 1rem;
`;

export const CountryName = styled.span`
  text-align: right;
  color: white;
  font-weight: bold;
  font-size: 0.9rem;
`;

export const CountryArea = styled.span`
  text-align: right;
  font-size: 0.7rem;
  color: black;
`;

export const ArrowIcon = styled(BsArrowRightCircle)`
  grid-area: pass;
  position: absolute;
  top: 5px;
  right: 5px;
`;
