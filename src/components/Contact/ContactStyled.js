import styled from 'styled-components';

export const UserData = styled.p`
display: flex;
margin: 0px
  justify-content: center;
  align-items: center;
font-size: 20px;
  font-weight: 500;
     @media screen and (min-width: 450px) {
     font-size: 20px;
  font-weight: 500;`;

export const DeleteBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 85px;
  height: 35px;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border: none;
  outline: none;
  :hover,
  :focus {
    background-color: #ec4d1c;
    color: red;
  }
`;
