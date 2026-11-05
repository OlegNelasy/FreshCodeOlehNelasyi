import { useState } from "react";

import EnterForm from "./EnterForm";
import Botton from "./Button";
import TaskList from "./TaskList";

import styles from "./TaskManager.module.scss";

export default function TaskManager() {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <section className={styles.taskContainer}>
      <div className={styles.taskContentWrapper}>
        <EnterForm />
        <div className={styles.filterButtons}>
          <Botton
            filterValue={"all"}
            label={"Все"}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
          <Botton
            filterValue={"active"}
            label={"Актуальные"}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
          <Botton
            filterValue={"completed"}
            label={"Выполненные"}
            activeFilter={activeFilter}
            setActiveFilter={setActiveFilter}
          />
        </div>
        <TaskList activeFilter={activeFilter} />
      </div>
    </section>
  );
}
