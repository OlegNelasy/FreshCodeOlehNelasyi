import UserCardItem from "../UserCardItem/";
import stelys from "./UserCards.module.css";

export default function UserCards({ users, onDeleteUser, onToggleSelect }) {
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
          isSelected,
        }) => (
          <UserCardItem
            key={id}
            id={id}
            onDelete={onDeleteUser}
            onSelect={onToggleSelect}
            photo={photo}
            firstName={firstName}
            lastName={lastName}
            hashtag={hashtag}
            stats={stats}
            isVerified={isVerified}
            isMale={isMale}
            isSelected={isSelected}
          />
        ),
      )}
    </main>
  );
}
