import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Helmet } from 'react-helmet-async';
import { RegisterForm, RegisterField, RegisterButton, RegisterLabel } from './RegisterStyled';
export default function Register() {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <>
      <Helmet>
        <title>Register</title>
      </Helmet>
      <RegisterForm onSubmit={handleSubmit} autoComplete="off">
        <RegisterLabel>
          Username
          <RegisterField type="text" name="name" />
        </RegisterLabel>
        <RegisterLabel>
          Email
          <RegisterField type="email" name="email" />
        </RegisterLabel>
        <RegisterLabel>
          Password
          <RegisterField type="password" name="password" />
        </RegisterLabel>
        <RegisterButton type="submit">Register</RegisterButton>
      </RegisterForm>
    </>
  );
}
