import { NavLink, Outlet } from "react-router-dom";
import cs from "classnames";
import styles from "./Layout.module.scss";

export default function Layout() {
  return (
    <div className={styles.layoutWrapper}>
      <header className={styles.header}>
        <nav>
          <ul className={styles.mainMenu}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  cs(styles.link, { [styles.activeLink]: isActive })
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  cs(styles.link, { [styles.activeLink]: isActive })
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/components"
                className={({ isActive }) =>
                  cs(styles.link, { [styles.activeLink]: isActive })
                }
              >
                Components
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
