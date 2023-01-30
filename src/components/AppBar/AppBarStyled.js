import styled from 'styled-components';

export const StyledHeader = styled.header`
  margin-bottom: 10px;
  left: 0;
  top: 0;
  right: 0;
  display: flex;
  justify-content: space-between;

  align-items: center;
  padding: 10px;
  z-index: 555;
  background-color: #60b8ff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  @media screen and (min-width: 450px) {
    padding: 15px 25px;
  }
`;
export const UserName = styled.p`
  gap: 5px;
  font-size: 24px;
  font-weight: 500;
  margin: 0px;
  text-align: center;
`;
