import { Helmet } from 'react-helmet-async';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { LoginForm, LoginLabel, LoginField,  LoginButton } from './LoginStyled';

export default function Login() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <LoginForm onSubmit={handleSubmit} autoComplete="off">
        <LoginLabel>
          Email
          <LoginField type="email" name="email" />
        </LoginLabel>
        <LoginLabel>
          Password
          <LoginField type="password" name="password" />
        </LoginLabel>
        <LoginButton type="submit">Log In</LoginButton>
      </LoginForm>
    </>
  );
}
