import styles from "./UserCard.module.css";

function UserCard({
  photo,
  firstName,
  lastName,
  hashtag,
  isVerified,
  isMale,
  stats: { tweets, following, followers },
}) {
  const shadowColor = isMale
    ? "rgba(29, 155, 240, 0.8)"
    : "rgba(249, 24, 128, 0.8)";

  return (
    <article
      className={styles.card}
      style={{ boxShadow: `0 12px 30px 5px ${shadowColor}` }}
    >
      <header
        className={styles.headerContainer}
        style={{
          backgroundImage: `url('${photo}')`,
        }}
      >
        <h2 className={styles.userName}>
          {firstName} {lastName}
          {isVerified && (
            <svg className={styles.verifyIcon} viewBox="0 0 24 24">
              <path
                fill="#1d9bf0"
                d="M22.5 12.5c0-1.58-.875-2.95-2.148-3.6.154-.435.238-.905.238-1.4 0-2.21-1.71-3.998-3.918-3.998-.47 0-.92.084-1.336.25C14.818 2.415 13.51 1.5 12 1.5s-2.816.917-3.337 2.25c-.416-.165-.866-.25-1.336-.25-2.21 0-3.918 1.79-3.918 4 0 .495.084.965.238 1.4-1.273.65-2.148 2.02-2.148 3.6 0 1.46.74 2.746 1.867 3.45-.032.21-.047.424-.047.64 0 2.21 1.71 3.998 3.918 3.998.47 0 .92-.084 1.336-.25C9.184 21.585 10.49 22.5 12 22.5s2.816-.917 3.337-2.25c.416.165.866.25 1.336.25 2.21 0 3.918-1.79 3.918-4 0-.216-.015-.43-.047-.64 1.127-.704 1.867-1.99 1.867-3.45z"
              />
              <path
                fill="#ffffff"
                d="M10.04 16.05l-3.36-3.36 1.42-1.42 1.94 1.94 5.2-5.2 1.42 1.42-6.62 6.62z"
              />
            </svg>
          )}
        </h2>
        <span>@{hashtag}</span>
        <button className={styles.addButton}>+</button>
      </header>
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
          <span className={styles.statValue}>{followers}</span>
        </div>
      </footer>
    </article>
  );
}

export default UserCard;
