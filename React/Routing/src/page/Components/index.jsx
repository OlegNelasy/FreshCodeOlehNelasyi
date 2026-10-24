import { NavLink, Outlet } from "react-router-dom";
import cs from "classnames";
import styles from "./Components.module.scss";

const calcClassName = ({ isActive }) =>
  cs(styles.link, { [styles.activeLink]: isActive });

export default function Components() {
  return (
    <section className={styles.componentsPage}>
      <nav>
        <ul className={styles.subMenu}>
          <li>
            <NavLink to="component_1" className={calcClassName}>
              Component 1
            </NavLink>
          </li>
          <li>
            <NavLink to="component_2" className={calcClassName}>
              Component 2
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </section>
  );
}
