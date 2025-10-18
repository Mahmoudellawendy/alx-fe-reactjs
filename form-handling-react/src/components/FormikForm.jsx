import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  username: Yup.string().required('اسم المستخدم مطلوب'),
  email: Yup.string().email('بريد غير صالح').required('البريد الإلكتروني مطلوب'),
  password: Yup.string().min(6, 'كلمة المرور قصيرة').required('كلمة المرور مطلوبة'),
});

function FormikForm() {
  const handleSubmit = (values) => {
    console.log('تم الإرسال:', values);
    // يمكنك إرسال البيانات إلى API هنا
  };

  return (
    <Formik
      initialValues={{ username: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <Field name="username" placeholder="اسم المستخدم" />
          <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
        </div>

        <div>
          <Field name="email" placeholder="البريد الإلكتروني" />
          <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
        </div>

        <div>
          <Field name="password" type="password" placeholder="كلمة المرور" />
          <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
        </div>

        <button type="submit">تسجيل</button>
      </Form>
    </Formik>
  );
}

export default FormikForm;
