import { Navigation } from 'components/Navigation/Navigation';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { useAuth } from 'components/hooks/useAuth';
import { StyledHeader, UserName } from './AppBarStyled';

export const AppBar = () => {
  const { isLoggedIn, user } = useAuth();

  return (
    <StyledHeader>
      <Navigation />
      <UserName>Welcome {isLoggedIn ? user.name : 'stranger'}</UserName>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </StyledHeader>
  );
};
