/* eslint-disable no-shadow */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { Formik } from 'formik';

const SignUp = () => {
  const [inputName, cambiarInputName] = useState('');
  const [inputEmail, cambiarInputEmail] = useState('');
  const [inputPassword, cambiarInputPassword] = useState('');

  const handleInputName = (e) => {
    cambiarInputName(e.target.value);
  };

  const handleInputEmail = (e) => {
    cambiarInputEmail(e.target.value);
  };

  const handleInputPassword = (e) => {
    cambiarInputPassword(e.target.value);
  };

  return (
    <Formik
      onSubmit={() => {
        console.log('eviado');
      }}
    >
      {(handleSubmit) => (
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Nombre:</label>
            <input
              id="name"
              type="text"
              name="name"
              value={inputName}
              onChange={handleInputName}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              id="email"
              type="text"
              name="email"
              value={inputEmail}
              onChange={handleInputEmail}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              name="password"
              value={inputPassword}
              onChange={handleInputPassword}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </Formik>
  );
};

export default SignUp;
