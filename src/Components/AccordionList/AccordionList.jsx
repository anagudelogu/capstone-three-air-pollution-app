import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import useToggle from '../../Hooks/useToggle';

const AccordionList = ({ children, list, toggleMenu }) => {
  const { state: isOpen, toggleState: toggleAccordion } = useToggle();

  const handleToggle = () => {
    toggleMenu();
    toggleAccordion();
  };

  return (
    <>
      <button type="button" onClick={toggleAccordion}>
        {children}
        {' '}
        +
      </button>
      {isOpen && (
        <ul>
          {list.map((item) => (
            <li key={item}>
              <Link to={`/${item}`} onClick={handleToggle}>
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

AccordionList.propTypes = {
  children: PropTypes.string.isRequired,
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  toggleMenu: PropTypes.func.isRequired,
};

export default AccordionList;
