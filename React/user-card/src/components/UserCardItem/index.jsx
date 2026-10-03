import { useState } from "react";

import styles from "./UserCard.module.css";

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
}) {
  const [followersCount, setFollowersCount] = useState(followers);

  const handleFollowClick = () => {
    setFollowersCount(followersCount + 1);
  };

  const [isStarred, setIsStarred] = useState(false);

  const toggleStar = () => {
    setIsStarred(!isStarred);
  };

  const [isSelected, setIsSelected] = useState(false);

  const handleCardClick = () => {
    setIsSelected(!isSelected);
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
      onClick={handleCardClick}
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
