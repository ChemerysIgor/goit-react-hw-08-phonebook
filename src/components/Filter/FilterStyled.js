import styled from 'styled-components';

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 24px;
  font-weight: 500;
  width: 400px;
`;

export const FilterField = styled.input`
  border-radius: 15px;
  outline: none;
  padding: 2px 10px;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: #e0e0e0;
  :hover,
  :focus {
    outline: 2px solid #60b8ff;
  }
  @media screen and (max-width: 450px) {
    max-width: 250px;
  }
`;
