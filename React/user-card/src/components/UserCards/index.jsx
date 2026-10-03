import { useState } from "react";
import UserCardItem from "../UserCardItem";
import stelys from "./UserCard.module.css";

export default function UserCards({ usersData }) {
  const [users, setUsers] = useState(usersData);

  const handleDeleteUser = (idToRemove) => {
    setUsers(users.filter((user) => user.id !== idToRemove));
  };

  return (
    <main className={stelys.UserCardsContainer}>
      {users.map(
        ({
          id,
          photo,
          firstName,
          lastName,
          hashtag,
          stats,
          isVerified,
          isMale,
        }) => (
          <UserCardItem
            key={id}
            id={id}
            onDelete={handleDeleteUser}
            photo={photo}
            firstName={firstName}
            lastName={lastName}
            hashtag={hashtag}
            stats={stats}
            isVerified={isVerified}
            isMale={isMale}
          />
        ),
      )}
    </main>
  );
}
