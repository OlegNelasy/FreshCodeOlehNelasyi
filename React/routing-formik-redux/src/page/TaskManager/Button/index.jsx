import cn from "classnames";
import styles from "./Button.module.scss";

export default function Button({
  filterValue,
  label,
  activeFilter,
  setActiveFilter,
}) {
  return (
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
}
