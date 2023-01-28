import styled from 'styled-components';

export const List = styled.ul`
width: 400px;
padding: 10px;
display: flex;
flex-direction: column;
gap: 10px;
background-color: #fff;
border-radius: 15px;
list-style: none
 
}
`;

export const ContactCard = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 10px;
  font-size: 20px;
  font-weight: 500;
  background-color: #e0e0e0;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
