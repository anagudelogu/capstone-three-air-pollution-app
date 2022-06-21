import styled from 'styled-components/macro';
import Africa from '../../Assets/Images/Africa.png';
import America from '../../Assets/Images/Americas.png';
import Asia from '../../Assets/Images/Asia.png';
import Europe from '../../Assets/Images/Europe.png';
import Oceania from '../../Assets/Images/Oceania.png';

export const CardContainer = styled.div`
  background-image: ${(props) => {
    if (props.region === 'Africa') return `url(${Africa})`;
    if (props.region === 'America') return `url(${America})`;
    if (props.region === 'Europe') return `url(${Europe})`;
    if (props.region === 'Asia') return `url(${Asia})`;
    if (props.region === 'Oceania') return `url(${Oceania})`;
    return props.region;
  }};
  background-repeat: no-repeat;
  background-size: contain;
  min-width: 120px;
  min-height: 120px;
`;

export const CardTitle = styled.h3``;
