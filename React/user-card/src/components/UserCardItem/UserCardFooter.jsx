import styles from "./UserCardItem.module.css";

export default function UserCardFooter({ tweets, following, followersCount }) {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.statItem}>
        <span className={styles.statLabel}>Tweets</span>
        <span className={styles.statValue}>{tweets}</span>
      </div>
      <div className={styles.statItem}>
        <span className={styles.statLabel}>Following</span>
        <span className={styles.statValue}>{following}</span>
      </div>
      <div className={styles.statItem}>
        <span className={styles.statLabel}>Followers</span>
        <span className={styles.statValue}>{followersCount}</span>
      </div>
    </footer>
  );
}
