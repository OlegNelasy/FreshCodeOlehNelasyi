import { Outlet } from "react-router-dom";

import MainHeader from "../MainHeader";

import styles from "./Layout.module.scss";

export default function Layout() {
  return (
    <div className={styles.layoutWrapper}>
      <MainHeader />

      <main className={styles.content}>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <p>Author: Oleh Nelasyi</p>
      </footer>
    </div>
  );
}
