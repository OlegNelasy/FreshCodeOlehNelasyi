import { NavLink } from "react-router-dom";
import cs from "classnames";
import WeatherWidget from "../WeatherWidget";
import styles from "./MainHeader.module.scss";

const calcClassName = ({ isActive }) =>
  cs(styles.link, { [styles.activeLink]: isActive });

export default function MainHeader() {
  return (
    <header className={styles.header}>
      <WeatherWidget />
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
  );
}
