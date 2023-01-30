import styled from 'styled-components';

export const UserWraper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  @media screen and (min-width: 450px) {
    flex-direction: row;
    gap: 10px;
  }
`;

export const StyledLogoutBtn = styled.button`
  text-decoration: none;
  text-align: center;
  font-size: 14px;
  color: #ffffff;
  font-weight: 500;
  background-color: #bebcbc;
  padding: 5px;
  width: 70px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  outline: none;
  border: none;
  :hover,
  :focus {
    background-color: #5365ff;
  }
  @media screen and (min-width: 450px) {
    padding: 7px;
    width: 80px;
    font-size: 16px;
  }
`;
