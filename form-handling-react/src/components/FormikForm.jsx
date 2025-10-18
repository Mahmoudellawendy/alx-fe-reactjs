import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  username: Yup.string().required('Username is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password too short').required('Password is required'),
});

const FormikForm = () => (
  <Formik
    initialValues={{ username: '', email: '', password: '' }}
    validationSchema={SignupSchema}
    onSubmit={(values, { setSubmitting, resetForm }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resetForm();
        setSubmitting(false);
      }, 500);
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        <Field type="text" name="username" placeholder="Username" />
        <ErrorMessage name="username" component="div" style={{ color: 'red' }} />

        <Field type="email" name="email" placeholder="Email" />
        <ErrorMessage name="email" component="div" style={{ color: 'red' }} />

        <Field type="password" name="password" placeholder="Password" />
        <ErrorMessage name="password" component="div" style={{ color: 'red' }} />

        <button type="submit" disabled={isSubmitting}>Register</button>
      </Form>
    )}
  </Formik>
);

export default FormikForm;
