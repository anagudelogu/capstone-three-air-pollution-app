import styled from 'styled-components/macro';
import airImg from '../../Assets/Images/air.png';

export const Section = styled.section`
  margin-top: 50px;
  max-height: calc(100vh - 50px);
  height: calc(100vh - 50px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

export const HeadingContainer = styled.div`
  background: var(--mid-blue) url(${airImg});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;
  height: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const Title = styled.h1`
  width: 70%;
  font-size: 2rem;
  color: white;
  padding-left: 1rem;
`;

export const SubTitle = styled.p`
  background-color: var(--dark-blue);
  color: white;
  padding: 0.3rem;
  height: 5%;
`;

export const RegionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background-color: var(--mid-blue);
  height: 65%;
`;
