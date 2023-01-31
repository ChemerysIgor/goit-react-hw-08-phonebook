import styled from 'styled-components';

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  padding: 15px;
  gap: 15px;
  width: 400px;
  //   align-items: center;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const LoginLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
  font-size: 24px;
  font-weight: 500;
`;

export const LoginField = styled.input`
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

export const LoginButton = styled.button`
  width: 50%;

  text-decoration: none;
  text-align: center;
  color: #ffffff;
  font-weight: 700;
  font-size: 24px;
  background-color: #60b8ff;
  padding: 5px;
  border-radius: 15px;
  border: none;
  outline: none;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  :hover,
  :focus {
    background-color: #ec4d1c;
  }
`;
