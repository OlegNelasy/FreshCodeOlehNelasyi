import styles from "./UserCounter.module.css";

export default function UserCounter({ selected, total }) {
  return (
    <div className={styles.counterContainer}>
      <p className={styles.counterText}>
        Выбрано пользователей:
        <span className={styles.highlight}> {selected}</span> из {total}
      </p>
    </div>
  );
}
