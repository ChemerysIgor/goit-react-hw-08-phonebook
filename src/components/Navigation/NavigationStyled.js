import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  hieght: 20px;
  gap: 5px;
  @media screen and (min-width: 450px) {
    display: flex;
    flex-direction: row;
    gap: 15px;
    height: 30px;

    text-align: center;
  }
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  color: #ffffff;
  font-weight: 500;
  background-color: #bebcbc;
  padding: 5px;
  width: 100%;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
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
