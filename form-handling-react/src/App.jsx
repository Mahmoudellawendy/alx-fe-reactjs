import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm';

function App() {
  return (
    <div>
      <h2>Controlled Components Form</h2>
      <RegistrationForm />
      <hr />
      <h2>Formik Form</h2>
      <FormikForm />
    </div>
  );
}

export default App;
