import { useState } from "react";

import styles from "./UserCard.module.css";

import UserCardFooter from "./UserCardFooter";
import UserCardHeader from "./UserCardHeader";

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

  const handleFollowClick = () => {
    setFollowersCount(followersCount + 1);
  };

  const [isStarred, setIsStarred] = useState(false);

  const toggleStar = () => {
    setIsStarred(!isStarred);
  };

  return (
    <article
      className={`${styles.card} ${isMale ? styles.сardMan : styles.сardWoman}`}
    >
      <UserCardHeader
        firstName={firstName}
        lastName={lastName}
        isVerified={isVerified}
        buttonOnClick={handleFollowClick}
        StarIconOnClick={toggleStar}
        isStarred={isStarred}
        photo={photo}
        hashtag={hashtag}
      />
      <UserCardFooter
        tweets={tweets}
        following={following}
        followersCount={followersCount}
      />
    </article>
  );
}

export default UserCard;
