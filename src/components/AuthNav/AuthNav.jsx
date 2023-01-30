import { NavLink } from 'react-router-dom';
import { StyledLink } from 'components/Navigation/NavigationStyled';
export const AuthNav = () => {
  return (
    <div>
      <StyledLink to="/login">Login</StyledLink>
      <StyledLink to="/register">Register</StyledLink>
    </div>
  );
};
