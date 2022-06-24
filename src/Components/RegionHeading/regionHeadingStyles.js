import styled from 'styled-components/macro';
import { BsArrowLeftCircle } from 'react-icons/bs';

export const HeadingContainer = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--mid-blue);
  padding: 0 1rem;
  position: relative;
`;

export const Title = styled.h2`
  text-align: right;
  font-size: 2rem;
  color: white;
`;

export const BackBtn = styled(BsArrowLeftCircle)`
  color: white;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 10px;
  left: 10px;
`;
