import { useAuth } from 'components/hooks/useAuth';
import { NavLink } from 'react-router-dom';
import { StyledNav, StyledLink } from './NavigationStyled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <StyledNav>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </StyledNav>
  );
};
