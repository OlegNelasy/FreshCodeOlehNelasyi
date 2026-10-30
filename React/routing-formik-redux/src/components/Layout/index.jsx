import { NavLink, Outlet } from "react-router-dom";
import cs from "classnames";
import styles from "./Layout.module.scss";

const calcClassName = ({ isActive }) =>
  cs(styles.link, { [styles.activeLink]: isActive });

export default function Layout() {
  return (
    <div className={styles.layoutWrapper}>
      <header className={styles.header}>
        <nav>
          <ul className={styles.mainMenu}>
            <li>
              <NavLink to="/" className={calcClassName}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={calcClassName}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/components" className={calcClassName}>
                Components
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" className={calcClassName}>
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/task-manager" className={calcClassName}>
                Task Manager
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main className={styles.content}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <p>Author: Oleh Nelasyi</p>
      </footer>
    </div>
  );
}
