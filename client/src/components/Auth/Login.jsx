import css from './styles.module.css';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className={css.wrap}>
      <h3 className={css.title}>Login with email</h3>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={async (values, actions) => {}}
      >
        {({ isSubmitting }) => (
          <Form className={css.form}>
            <label className={css.label} htmlFor="email">
              Email
            </label>
            <Field
              autoComplete="on"
              id="email"
              className={css.input}
              name="email"
              placeholder="user@mail.com"
              type="email"
            />

            <label className={css.label} htmlFor="password">
              Password
            </label>
            <Field
              autoComplete="on"
              id="password"
              className={css.input}
              name="password"
              placeholder="Your password"
              type="password"
            />

            <button
              className={css.submit}
              type="submit"
              disabled={isSubmitting}
            >
              Login
            </button>
          </Form>
        )}
      </Formik>
      <p className={css.text}>
        Do not have an account yet?&nbsp;&nbsp;
        <Link className={css.link} to="/register">
          Create account
        </Link>
      </p>
    </div>
  );
};

export default Login;
