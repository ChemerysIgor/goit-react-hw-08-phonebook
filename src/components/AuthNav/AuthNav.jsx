// import { NavLink } from 'react-router-dom';
import { StyledLink } from 'components/Navigation/NavigationStyled';
import { LogRegContainer } from './AuthNavStyled';


export const AuthNav = () => {
  return (
    <LogRegContainer>
      <StyledLink to="/login">Login</StyledLink>
      <StyledLink to="/register">Register</StyledLink>
    </LogRegContainer>
  );
};
