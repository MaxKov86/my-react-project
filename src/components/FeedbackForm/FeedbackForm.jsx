import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';

import css from './FeedbackForm.module.css';

const initialValues = {
  username: '',
  email: '',
  message: '',
  level: 'good',
};

const FeedbackSchema = Yup.object().shape({
  username: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Must be a valid email!').required('Required'),
  message: Yup.string()
    .min(3, 'Too short')
    .max(256, 'Too long')
    .required('Required'),
  level: Yup.string().oneOf(['good', 'neutral', 'bad']).required('Required'),
});

export const FeedbackForm = () => {
  const usernameFieldId = useId();
  const emailFieldId = useId();
  const msgFieldId = useId();
  const levelFieldId = useId();

  const handleSubmit = (values, actions) => {
    console.log(values);

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label htmlFor={usernameFieldId}>Name</label>
        <Field
          className={css.field}
          type="text"
          name="username"
          id={usernameFieldId}
        />
        <ErrorMessage name="username" as="span" />

        <label htmlFor={emailFieldId}>Email</label>
        <Field
          className={css.field}
          type="email"
          name="email"
          id={emailFieldId}
        />
        <ErrorMessage name="email" as="span" />

        <label htmlFor={msgFieldId}>Message</label>
        <Field
          className={css.field}
          as="textarea"
          name="message"
          id={msgFieldId}
        />
        <ErrorMessage name="message" as="span" />

        <label htmlFor={levelFieldId}>Service satisfaction level</label>
        <Field className={css.field} as="select" name="level" id={levelFieldId}>
          <option value="good">Good</option>
          <option value="neutral">Neutral</option>
          <option value="bad">Bad</option>
        </Field>
        <ErrorMessage name="level" as="span" />

        <button className={css.btn} type="submit">
          Submit
        </button>
      </Form>
    </Formik>
  );
};
