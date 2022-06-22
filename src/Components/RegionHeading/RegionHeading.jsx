import React from 'react';
import PropTypes from 'prop-types';
import Africa from '../../Assets/Images/Africa.png';
import America from '../../Assets/Images/Americas.png';
import Asia from '../../Assets/Images/Asia.png';
import Europe from '../../Assets/Images/Europe.png';
import Oceania from '../../Assets/Images/Oceania.png';

const RegionHeading = ({ children }) => (
  <div>
    {children === 'Africa' && <img src={Africa} alt={children} />}
    {children === 'Asia' && <img src={Asia} alt={children} />}
    {children === 'America' && <img src={America} alt={children} />}
    {children === 'Europe' && <img src={Europe} alt={children} />}
    {children === 'Oceania' && <img src={Oceania} alt={children} />}

    <h2>{children}</h2>
  </div>
);

RegionHeading.propTypes = {
  children: PropTypes.string.isRequired,
};

export default RegionHeading;
