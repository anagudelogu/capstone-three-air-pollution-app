import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import useToggle from '../../Hooks/useToggle';

const AccordionList = ({ children, list }) => {
  const { state: isOpen, toggleState: toggleAccordion } = useToggle();

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
              <Link to={`/${item}`}>{item}</Link>
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
};

export default AccordionList;
