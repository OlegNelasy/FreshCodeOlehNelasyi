import { useState } from "react";

import styles from "./UserCardItem.module.css";

import UserCardFooter from "./UserCardFooter";
import UserCardHeader from "./UserCardHeader";

function UserCard({
  id,
  onDelete,
  photo,
  firstName,
  lastName,
  hashtag,
  isVerified,
  isMale,
  stats: { tweets, following, followers },
  onSelect,
  isSelected,
}) {
  const [followersCount, setFollowersCount] = useState(followers);

  const handleFollowClick = (e) => {
    e.stopPropagation();
    setFollowersCount(followersCount + 1);
  };

  const [isStarred, setIsStarred] = useState(false);

  const toggleStar = (e) => {
    e.stopPropagation();
    setIsStarred(!isStarred);
  };

  const shadowClass = isSelected
    ? styles.cardSelected
    : isMale
      ? styles.сardMan
      : styles.сardWoman;

  const handleCloseClick = (e) => {
    e.stopPropagation();
    onDelete(id);
  };

  return (
    <article
      className={`${styles.card} ${shadowClass}`}
      onClick={() => onSelect(id)}
    >
      <UserCardHeader
        onDelete={handleCloseClick}
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
