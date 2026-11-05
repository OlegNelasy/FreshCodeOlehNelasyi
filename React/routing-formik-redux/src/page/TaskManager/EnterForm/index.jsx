import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import cn from "classnames";
import { useDispatch } from "react-redux";
import { addTask } from "./../../../store/slices/taskSlice";

import styles from "./EnterForm.module.scss";

const initialValues = {
  inputTask: "",
};

const validationSchema = yup.object({
  inputTask: yup
    .string()
    .trim()
    .min(10, "Минимальная длина задачи — 10 символов!")
    .max(150, "Максимальная длина задачи — 150 символов!")
    .required("Поле не может быть пустым!"),
});

export default function EnterForm() {
  const dispatch = useDispatch();

  const onSubmit = (values, bag) => {
    console.log(values);
    dispatch(addTask(values.inputTask));
    bag.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ errors, touched }) => (
        <Form className={styles.form}>
          <h2>Task Manager</h2>
          <div className={styles.inputContainer}>
            <Field
              type="text"
              name="inputTask"
              placeholder="Введите новую задачу"
              className={cn(styles.input, {
                [styles.inputError]: errors.inputTask && touched.inputTask,
              })}
            />
            <ErrorMessage
              name="inputTask"
              component="div"
              className={styles.errorText}
            ></ErrorMessage>
          </div>
        </Form>
      )}
    </Formik>
  );
}
