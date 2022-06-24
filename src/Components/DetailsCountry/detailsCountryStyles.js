import styled from 'styled-components/macro';
import { BsArrowLeftCircle } from 'react-icons/bs';

export const HeadingContainer = styled.div`
  margin-top: 50px;
  padding: 1.5rem;
  height: 25%;
  position: relative;
`;

export const Country = styled.h2`
  text-align: center;
  font-family: var(--lato);
  font-weight: bold;
  font-size: 2.2rem;
  color: white;
`;

export const Region = styled.h3`
  text-align: center;
  font-family: var(--roboto);
  font-weight: normal;
  font-size: 1.1rem;
`;

export const BackIcon = styled(BsArrowLeftCircle)`
  color: white;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 10px;
  left: 10px;
`;
