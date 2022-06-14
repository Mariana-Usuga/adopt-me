/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import Lottie from 'react-lottie';
import catLottie from '../../style/static/cat-lottie.json';

import './signUp.scss';

const SignUp = () => {
  const [formSend, setFormSend] = useState(false);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: catLottie,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

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
        <div className="formik">
          <div className="formik__img">
            <Lottie
              ptions={defaultOptions}
              height={800}
              width={800}
            />
          </div>
          <div className="formik__container">
            <h2 className="formik__container__logo">Adopt me</h2>
            <h2 className="formik__container__title">Sign Up</h2>
            <Form action="" className="formik__container__form">
              <div className="formik__container__form__item">
                <label className="formik__container__form__item__label" htmlFor="name">Nombre:</label>
                <Field
                  className="formik__container__form__item__field"
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
              <div className="formik__container__form__item">
                <label className="formik__container__form__item__label" htmlFor="email">Email:</label>
                <Field
                  className="formik__container__form__item__field"
                  id="email"
                  type="text"
                  name="email"
                  placeholder="Email"
                />
                {touched.email && errors.email && <div>{errors.email}</div>}
              </div>
              <div className="formik__container__form__item">
                <label className="formik__container__form__item__label" htmlFor="password">Password:</label>
                <Field
                  className="formik__container__form__item__field"
                  id="password"
                  type="password"
                  name="password"
                  placeholder="Password"
                />
                {touched.password && errors.password && <div>{errors.password}</div>}
              </div>
              <div className="formik__container__form__submit">
                <button className="formik__container__form__submit__btn" type="submit">Create account</button>
              </div>
              <div className="formik__container__form__login">
                <div>
                  Already have an account?
                  <span> Log in</span>
                </div>
              </div>
              {formSend && <p>Form send</p>}
            </Form>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default SignUp;
