import { Formik } from "formik";
import * as yup from "yup";
import styles from "./Login.module.scss";

// userData = []

export default function Login() {
  return (
    <section className={styles.wrapperContent}>
      <h2>Login Form</h2>
      <Formik
        initialValues={{ inputLogin: "", inputPassword: "" }}
        onSubmit={(values, bag) => {
          console.log("Данные формы:", values);
          bag.resetForm();
        }}
        validationSchema={yup.object({
          inputLogin: yup.string().trim().required("Логин обязателен"),
          inputPassword: yup.string().trim().required("Пароль обязателен"),
        })}
      >
        {({ values, handleChange, handleSubmit, errors, touched }) => (
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              name="inputLogin"
              value={values.inputLogin}
              onChange={handleChange}
              placeholder="Login or email"
            />
            <input
              type="password"
              name="inputPassword"
              value={values.inputPassword}
              onChange={handleChange}
              placeholder="Password"
            />
            {touched.inputPassword && errors.inputPassword && (
              <div>{errors.inputPassword}</div>
            )}
            <button type="submit">Login</button>
          </form>
        )}
      </Formik>
    </section>
  );
}
