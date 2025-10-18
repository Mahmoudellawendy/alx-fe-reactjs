import RegistrationForm from './components/RegistrationForm';
import FormikForm from './components/FormikForm';

function App() {
  return (
    <div>
      <h1>نموذج التسجيل - Controlled Components</h1>
      <RegistrationForm />

      <hr />

      <h1>نموذج التسجيل - باستخدام Formik</h1>
      <FormikForm />
    </div>
  );
}

export default App;
