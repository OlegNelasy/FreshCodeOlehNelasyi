import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  addTask,
  deleteTask,
  toggleTaskCompletion,
} from "../../store/slices/taskSlice";

import styles from "./TaskManager.module.scss";

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

export default function TaskManager() {
  const [activeFilter, setActiveFilter] = useState("all");

  const tasks = useSelector((state) => state.tasks.tasksList);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) => {
    if (activeFilter === "active") return !task.completed;
    if (activeFilter === "completed") return task.completed;
    return true;
  });

  const onSubmit = (values, bag) => {
    console.log(values);
    dispatch(addTask(values.inputTask));
    bag.resetForm();
  };

  const renderButton = (filterValue, label) => (
    <button
      type="button"
      className={cn(styles.btn, {
        [styles.btnActive]: activeFilter === filterValue,
      })}
      onClick={() => setActiveFilter(filterValue)}
    >
      {label}
    </button>
  );

  return (
    <section className={styles.taskContainer}>
      <div className={styles.taskContentWrapper}>
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
        <div className={styles.filterButtons}>
          {renderButton("all", "Все")}
          {renderButton("active", "Актуальные")}
          {renderButton("completed", "Выполненные")}
        </div>
        <ul className={styles.taskList}>
          {filteredTasks.map((task) => (
            <li key={task.id} className={styles.taskItem}>
              <input
                type="checkbox"
                className={styles.taskCheckbox}
                checked={task.completed}
                onChange={() => dispatch(toggleTaskCompletion(task.id))}
              />
              <span
                className={cn(styles.taskText, {
                  [styles.textCompleted]: task.completed,
                })}
              >
                {task.text}
              </span>
              <button
                type="button"
                className={styles.deleteBtn}
                onClick={() => dispatch(deleteTask(task.id))}
              >
                Удалить
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
