import styled from 'styled-components/macro';
import { BsArrowRightCircle } from 'react-icons/bs';
import Africa from '../../Assets/Images/Africa.png';
import America from '../../Assets/Images/Americas.png';
import Asia from '../../Assets/Images/Asia.png';
import Europe from '../../Assets/Images/Europe.png';
import Oceania from '../../Assets/Images/Oceania.png';

export const CardContainer = styled.div`
  background-color: var(--mid-blue);
  background-image: ${(props) => {
    if (props.region === 'Africa') return `url(${Africa})`;
    if (props.region === 'America') return `url(${America})`;
    if (props.region === 'Europe') return `url(${Europe})`;
    if (props.region === 'Asia') return `url(${Asia})`;
    if (props.region === 'Oceania') return `url(${Oceania})`;
    return props.region;
  }};
  &:nth-child(4n + 1),
  &:nth-child(4n + 4) {
    background-color: var(--mid2-blue);
  }

  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0.7rem;
`;

export const CardTitle = styled.h3`
  color: white;
  font-size: 1.4rem;
`;

export const ArrowIcon = styled(BsArrowRightCircle)`
  color: white;
`;
