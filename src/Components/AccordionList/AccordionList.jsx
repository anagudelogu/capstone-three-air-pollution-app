import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import useToggle from '../../Hooks/useToggle';
import * as styled from './accordionListStyles';

const AccordionList = ({ children, list, toggleMenu }) => {
  const { state: isOpen, toggleState: toggleAccordion } = useToggle();

  const handleToggle = () => {
    toggleMenu();
    toggleAccordion();
  };

  return (
    <>
      <styled.ExpandibleButton
        type="button"
        onClick={toggleAccordion}
      >
        {children}
        <styled.ExpandIcon isOpen={isOpen} />
      </styled.ExpandibleButton>
      {isOpen && (
        <styled.ExpandedList>
          {list.map((item) => (
            <styled.ListItem key={item}>
              <Link to={`/${item}`} onClick={handleToggle}>
                {item}
              </Link>
            </styled.ListItem>
          ))}
        </styled.ExpandedList>
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
