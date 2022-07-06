/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

import './signUp.scss';

import '../../style/stylesMain.scss';

const SignUp = () => {
  const [formSend, setFormSend] = useState(false);

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = 'Please enter name';
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
          errors.name = 'el nombre solo puede contener letras y espacios';
        }
        if (!values.email) {
          errors.email = 'Please enter email';
        } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
          errors.email = 'el correo solo puede contener letras, numeros, puntos, guiones, y guion bajo';
        }
        if (!values.password) {
          errors.password = 'Please enter password';
        }
        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        resetForm();
        setFormSend(true);
        setTimeout(() => setFormSend(false), 5000);
        console.log('eviado', values);
      }}
    >
      {({ errors, touched }) => (
        <Form className="formSign" action="">
          <h2 className="formSign__title">Sign Up</h2>
          <div className="formSign__item">
            <label className="formSign__item__label" htmlFor="name">Nombre:</label>
            <Field
              className="formSign__item__field"
              id="name"
              type="text"
              name="name"
              placeholder="Name"
            />
            <ErrorMessage
              name="name"
              component={() => (
                <div>{errors.name}</div>
              )}
            />
          </div>
          <div className="formSign__item">
            <label className="formSign__item__label" htmlFor="email">Email:</label>
            <Field
              className="formSign__item__field"
              id="email"
              type="text"
              name="email"
              placeholder="Email"
            />
            {touched.email && errors.email && <div>{errors.email}</div>}
          </div>
          <div className="formSign__item">
            <label className="formSign__item__label" htmlFor="password">Password:</label>
            <Field
              className="formSign__item__field"
              id="password"
              type="password"
              name="password"
              placeholder="Password"
            />
            {touched.password && errors.password && <div>{errors.password}</div>}
          </div>
          <button className="formSign__submit" type="submit">Submit</button>
          {formSend && <p>Form send</p> }
        </Form>
      )}
    </Formik>
  );
};

export default SignUp;
