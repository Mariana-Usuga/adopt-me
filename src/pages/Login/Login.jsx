/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import catLottie from '../../style/static/cat.json';

import '../../style/stylesMain.scss';

import './login.scss';

const Login = () => {
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
      }}
    >
      {({ errors, touched }) => (
        <div className="formik">
          <div className="formik__animation">
            <Lottie
              className="formik__animation__lottie"
              options={defaultOptions}
              height={600}
              width={630}
            />
          </div>
          <div className="formik__container">
            <h2 className="formik__container__logo">Adopt me</h2>
            <h2 className="formik__container__title">Log in</h2>
            <Form action="" className="formik__container__form">
              <div className="formik__container__form__item">
                <label className="formik__container__form__item__label">
                  Email:
                </label>
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
                <div className="formik__container__form__forgortPassword">Forgot password?</div>
                {touched.password && errors.password && <div>{errors.password}</div>}
              </div>
              <div className="formik__container__form__submit">
                <button className="formik__container__form__submit__btn" type="submit">Sign in</button>
              </div>
              <div className="formik__container__form__signUp">
                <div>
                  {'Don\'t have an account?'}
                  <Link
                    to="/signUp"
                    // style={{ textDecoration: 'none' }}
                    className="formik__container__form__signUp__link"
                  >
                    <span> Sign Up</span>
                  </Link>
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

export default Login;
