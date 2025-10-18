import { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = formData;

    if (!username || !email || !password) {
      setError('جميع الحقول مطلوبة');
      return;
    }

    setError('');
    console.log('تم الإرسال:', formData);
    // هنا يمكن إرسال البيانات إلى API
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input name="username" placeholder="اسم المستخدم" onChange={handleChange} />
      <input name="email" placeholder="البريد الإلكتروني" onChange={handleChange} />
      <input name="password" type="password" placeholder="كلمة المرور" onChange={handleChange} />
      <button type="submit">تسجيل</button>
    </form>
  );
}

export default RegistrationForm;
