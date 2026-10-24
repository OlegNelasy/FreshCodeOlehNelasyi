import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import cn from "classnames";
import styles from "./Login.module.scss";

const userData = [
  { login: "admin", password: "123", email: "admin@example.com" },
  { login: "user", password: "password", email: "user@example.com" },
  { login: "test", password: "111", email: "test@example.com" },
  { login: "guest", password: "000", email: "guest@example.com" },
  { login: "krabik", password: "12345", email: "krabik@example.com" },
];

const FAIL_LOGIN_MESSAGE = "Неверный логин или пароль.";

export default function Login() {
  return (
    <section className={styles.formContainer}>
      <Formik
        initialValues={{ inputLogin: "", inputPassword: "" }}
        validateOnChange={false}
        validateOnBlur={false}
        onSubmit={(values, bag) => {
          const user = userData.find(
            (u) =>
              (u.login === values.inputLogin ||
                u.email === values.inputLogin) &&
              u.password === values.inputPassword,
          );

          if (user) {
            console.log(`Пользователь ${user.login} авторизован!`);
            bag.resetForm();
          } else {
            bag.setFieldError("inputPassword", FAIL_LOGIN_MESSAGE);
          }
        }}
        validationSchema={yup.object({
          inputLogin: yup.string().trim().required("Введите Login или Email!"),
          inputPassword: yup.string().trim().required("Введите пароль!"),
        })}
      >
        {({ errors, touched }) => (
          <Form className={styles.form}>
            <h2>Login Form</h2>
            <div className={styles.inputContainer}>
              <Field
                type="text"
                name="inputLogin"
                placeholder="Login or email"
                className={cn({
                  [styles.inputError]: errors.inputLogin && touched.inputLogin,
                })}
              />
              <ErrorMessage
                name="inputLogin"
                component="div"
                className={styles.errorText}
              ></ErrorMessage>
            </div>
            <div className={styles.inputContainer}>
              <Field
                type="password"
                name="inputPassword"
                placeholder="Password"
                className={cn({
                  [styles.inputError]:
                    errors.inputPassword &&
                    touched.inputPassword &&
                    errors.inputPassword !== FAIL_LOGIN_MESSAGE,
                })}
              />
              <ErrorMessage
                name="inputPassword"
                component="div"
                className={styles.errorText}
              ></ErrorMessage>
            </div>
            <button type="submit" className={styles.button}>
              Login
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
}
