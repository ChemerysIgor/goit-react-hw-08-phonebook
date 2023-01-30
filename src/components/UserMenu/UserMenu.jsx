import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { UserWraper, StyledLogoutBtn } from './UserMenuStyled';
export const UserMenu = () => {
  const dispatch = useDispatch();

  return (
    <UserWraper>
      <StyledLogoutBtn type="button" onClick={() => dispatch(logOut())}>
        Logout
      </StyledLogoutBtn>
    </UserWraper>
  );
};
