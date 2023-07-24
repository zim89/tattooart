import PropTypes from 'prop-types';
import clsx from 'clsx';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import scss from './ContactForm.module.scss';

const ContactsSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Повинно бути 3 символи чи більше.')
    .max(50, 'Повинно бути 50 символів чи менше.')
    .required('Поле повинно буди заповненим!'),
  mobile: Yup.string()
    .required('Поле повинно буди заповненим!')
    .length(12, 'Введіть номер у форматі 380#########')
    .matches(/[0-9]{10}/, 'Введіть корректні символи'),
  message: Yup.string()
    .min(3, 'Повинно бути 3 символи чи більше.')
    .max(1000, 'Повинно бути 2500 символів чи менше.')
    .required('Поле повинно буди заповненим!'),
});

const ContactForm = props => {
  return (
    <Formik
      initialValues={{
        name: '',
        mobile: '',
        message: '',
      }}
      validationSchema={ContactsSchema}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.resetForm();
      }}
    >
      {({ errors, touched }) => (
        <Form className={scss.form}>
          <div className={scss.formFields}>
            <div className={scss.formField}>
              <Field
                className={clsx(
                  scss.formInput,
                  errors.name && touched.name ? scss.formError : null
                )}
                name="name"
                placeholder="І’мя"
              />
              {errors.name && touched.name ? (
                <p className={scss.formErrorMsg}>{errors.name}</p>
              ) : null}
            </div>
            <div className={scss.formField}>
              <Field
                className={clsx(
                  scss.formInput,
                  errors.mobile && touched.mobile ? scss.formError : null
                )}
                name="mobile"
                placeholder="Телефон"
              />
              {errors.mobile && touched.mobile ? (
                <p className={scss.formErrorMsg}>{errors.mobile}</p>
              ) : null}
            </div>
            <div className={scss.formField}>
              <Field
                as="textarea"
                rows="4"
                className={clsx(
                  scss.formInput,
                  errors.message && touched.message ? scss.formError : null
                )}
                name="message"
                placeholder="Введіть повідомлення..."
              />

              {errors.message && touched.message ? (
                <p className={scss.formErrorMsg}>{errors.message}</p>
              ) : null}
            </div>
          </div>

          <button type="submit">Відправити</button>
        </Form>
      )}
    </Formik>
  );
};
ContactForm.propTypes = {};
export default ContactForm;
