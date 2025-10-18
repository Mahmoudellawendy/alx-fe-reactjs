import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>React Form Handling</h1>

      <h2>1. Controlled Components Form</h2>
      <RegistrationForm />

      <hr style={{ margin: '40px 0' }} />

      <h2>2. Formik Form with Yup Validation</h2>
      <FormikForm />
    </div>
  );
}

export default App;
