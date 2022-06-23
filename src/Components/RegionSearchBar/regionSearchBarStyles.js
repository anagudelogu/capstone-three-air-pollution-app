import styled from 'styled-components/macro';

export const SearchBarContainer = styled.div`
  background-color: var(--dark-blue);
`;

export const SearchBar = styled.input`
  width: 100%;
  background-color: transparent;
  appearance: none;
  outline: none;
  border: none;
  padding: 0.5rem 1rem;
  color: white;

  &::placeholder {
    color: white;
  }
`;
