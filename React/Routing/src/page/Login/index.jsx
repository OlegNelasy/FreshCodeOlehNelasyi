import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import cn from "classnames";
import styles from "./Login.module.scss";

const userData = [
  { login: "admin", password: "123" },
  { login: "user", password: "password" },
  { login: "test", password: "111" },
  { login: "guest", password: "000" },
  { login: "krabik", password: "12345" },
];

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
              u.login === values.inputLogin &&
              u.password === values.inputPassword,
          );

          if (user) {
            console.log(`Пользователь ${user.login} авторизован!`);
            bag.resetForm();
          } else {
            bag.setFieldError("inputPassword", "Неверный логин или пароль.");
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
                    errors.inputPassword && touched.inputPassword,
                })}
              />
              <ErrorMessage
                name="inputPassword"
                component="div"
                className={styles.errorText}
              ></ErrorMessage>
            </div>
            <button type="submit">Login</button>
          </Form>
        )}
      </Formik>
    </section>
  );
}
