# 📝 Form Handling in React - Controlled Components & Formik

This project demonstrates how to manage form data in React using two approaches:

1. ✅ Controlled Components using `useState`  
2. ✅ Formik library with Yup for validation

---

## 🚀 Project Objectives

- Build a **User Registration Form** with:
  - Username
  - Email
  - Password
- Handle form state manually using controlled components.
- Refactor the form using **Formik + Yup** for cleaner form handling and validation.

---

## 📁 Project Structure

```
form-handling-react/
├── src/
│   ├── components/
│   │   ├── RegistrationForm.jsx   // Controlled Components version
│   │   └── FormikForm.jsx         // Formik + Yup version
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── README.md
```

---

## 🛠️ Tools & Libraries Used

- [React](https://reactjs.org/)
- [Formik](https://formik.org/)
- [Yup](https://github.com/jquense/yup)
- [Vite](https://vitejs.dev/) (for fast development)

---

## 📦 Installation

```bash
# 1. Create project using Vite
npm create vite@latest form-handling-react -- --template react

# 2. Navigate into project directory
cd form-handling-react

# 3. Install dependencies
npm install

# 4. Install Formik and Yup
npm install formik yup

# 5. Run the development server
npm run dev
```

---

## 🌐 How to Use

### 🔹 Controlled Components Form

```jsx
import RegistrationForm from './components/RegistrationForm';
```

### 🔹 Formik + Yup Form

```jsx
import FormikForm from './components/FormikForm';
```

Both forms are rendered in `App.jsx`.

---

## 🧪 Validation Logic

### ✔️ Controlled Components:
- Simple inline validation (fields must not be empty)

### ✔️ Formik + Yup:
- Username: required
- Email: required + must be valid
- Password: required + minimum 6 characters

---

## 📚 المهمة باللغة العربية

### 🎯 الهدف:

- إنشاء نموذج تسجيل مستخدم باستخدام:
  - 🧠 المكونات المضبوطة (Controlled Components)
  - ⚙️ مكتبة Formik للتحكم في النماذج والتحقق من صحة البيانات باستخدام Yup

### 🧩 الحقول المطلوبة:

- اسم المستخدم
- البريد الإلكتروني
- كلمة المرور

### 📌 خطوات التنفيذ:

1. بناء النموذج باستخدام useState
2. التحقق من القيم يدويًا (لا يمكن ترك حقل فارغ)
3. إعادة كتابة النموذج باستخدام Formik و Yup
4. استخدام `<Formik>`, `<Field>`, `<ErrorMessage>`

---

## ✅ Author

Mahmoud Ellawendy  
[GitHub](https://github.com/Mahmoudellawendy)
