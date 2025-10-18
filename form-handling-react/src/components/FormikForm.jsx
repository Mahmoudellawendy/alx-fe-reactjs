import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const FormikForm = () => (
  <Formik
    initialValues={{ username: '', email: '', password: '' }}
    validationSchema={SignupSchema}
    onSubmit={(values, { setSubmitting, resetForm }) => {
      setTimeout(() => {
        alert('User Registered:\n' + JSON.stringify(values, null, 2));
        resetForm();
        setSubmitting(false);
      }, 500);
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        <div>
          <label>Username:</label><br />
          <Field type="text" name="username" />
          <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
        </div>

        <div>
          <label>Email:</label><br />
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
        </div>

        <div>
          <label>Password:</label><br />
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
        </div>

        <button type="submit" disabled={isSubmitting}>
          Register
        </button>
      </Form>
    )}
  </Formik>
);

export default FormikForm;
