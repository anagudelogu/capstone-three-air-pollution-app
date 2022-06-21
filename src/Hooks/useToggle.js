import { useState } from 'react';

const useToggle = () => {
  const [state, setState] = useState(false);

  const toggleState = () => {
    setState((prevState) => !prevState);
  };

  return { state, toggleState };
};

export default useToggle;
