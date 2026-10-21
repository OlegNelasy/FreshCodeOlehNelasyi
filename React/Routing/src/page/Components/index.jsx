import { NavLink, Outlet } from "react-router-dom";
import cs from "classnames";
import styles from "./Components.module.scss";

export default function Components() {
  return (
    <section className={styles.componentsPage}>
      <nav>
        <ul className={styles.subMenu}>
          <li>
            <NavLink
              to="component_1"
              className={({ isActive }) =>
                cs(styles.link, { [styles.activeLink]: isActive })
              }
            >
              Component 1
            </NavLink>
          </li>
          <li>
            <NavLink
              to="component_2"
              className={({ isActive }) =>
                cs(styles.link, { [styles.activeLink]: isActive })
              }
            >
              Component 2
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </section>
  );
}
