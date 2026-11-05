import cn from "classnames";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTask,
  toggleTaskCompletion,
} from "./../../../store/slices/taskSlice";

import styles from "./TaskList.module.scss";

export default function TaskList({ activeFilter }) {
  const tasks = useSelector((state) => state.tasks.tasksList);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) => {
    if (activeFilter === "active") return !task.completed;
    if (activeFilter === "completed") return task.completed;
    return true;
  });
  return (
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
  );
}
