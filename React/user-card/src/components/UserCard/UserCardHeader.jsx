import styles from "./UserCard.module.css";

import { VerifyIcon } from "./VerifyIcon";
import { StarIcon } from "./StarIcon";

export default function UserCardHeader({
  firstName,
  lastName,
  isVerified,
  buttonOnClick,
  StarIconOnClick,
  isStarred,
  photo,
  hashtag,
}) {
  return (
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
      <button className={styles.addButton} onClick={buttonOnClick}>
        +
      </button>
      <StarIcon
        className={styles.starIcon}
        onClick={StarIconOnClick}
        isStarred={isStarred}
      />
    </header>
  );
}
