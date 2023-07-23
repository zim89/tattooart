import css from './styles.module.css';
import { Formik, Field, Form } from 'formik';
import { Link } from 'react-router-dom';

const Register = () => {
  // const sleep = ms => new Promise(r => setTimeout(r, ms));

  return (
    <div className={css.wrap}>
      <h3 className={css.title}>Register with email</h3>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={async (values, actions) => {
          // await sleep(500);
          // alert(JSON.stringify(values, null, 2));
        }}
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
              Register
            </button>
          </Form>
        )}
      </Formik>
      <p className={css.text}>
        Already have an account?&nbsp;&nbsp;
        <Link className={css.link} to="/login">
          Login
        </Link>
      </p>
    </div>
  );
};

export default Register;
