import { useState } from "react";

import styles from "./UserCard.module.css";

import { VerifyIcon } from "./VerifyIcon";
import { StarIcon } from "./StarIcon";

function UserCard({
  photo,
  firstName,
  lastName,
  hashtag,
  isVerified,
  isMale,
  stats: { tweets, following, followers },
}) {
  const [followersCount, setFollowersCount] = useState(followers);
  const [isStarred, setIsStarred] = useState(false);

  const handleFollowClick = () => {
    setFollowersCount(followersCount + 1);
  };

  const toggleStar = () => {
    setIsStarred(!isStarred);
  };

  return (
    <article
      className={`${styles.card} ${isMale ? styles.сardMan : styles.сardWoman}`}
    >
      <header
        className={styles.headerContainer}
        style={{
          backgroundImage: `url('${photo}')`,
        }}
      >
        <h2 className={styles.userName}>
          {firstName} {lastName}
          {isVerified && <VerifyIcon className={styles.verifyIcon} />}
        </h2>
        <span>@{hashtag}</span>
        <button className={styles.addButton} onClick={handleFollowClick}>
          +
        </button>
        <StarIcon
          className={styles.starIcon}
          onClick={toggleStar}
          isStarred={isStarred}
        />
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
          <span className={styles.statValue}>{followersCount}</span>
        </div>
      </footer>
    </article>
  );
}

export default UserCard;
