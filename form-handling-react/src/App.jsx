import React from 'react';
import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/formikForm';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>React Form Handling</h1>
      <h2>Controlled Form</h2>
      <RegistrationForm />
      <hr style={{ margin: '40px 0' }} />
      <h2>Formik Form</h2>
      <FormikForm />
    </div>
  );
}

export default App;
