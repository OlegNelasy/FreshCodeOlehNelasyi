import { useState } from "react";
import { usersData } from "./data/usersData";

import UserCards from "./components/UserCards";
import UserCounter from "./components/UserCounter";

export default function App() {
  const [users, setUsers] = useState(usersData);

  const handleDeleteUser = (idToRemove) => {
    setUsers(users.filter((user) => user.id !== idToRemove));
  };

  const handleToggleSelect = (idToToggle) => {
    setUsers(
      users.map((user) =>
        user.id === idToToggle
          ? { ...user, isSelected: !user.isSelected }
          : user,
      ),
    );
  };

  const selectedCount = users.filter((user) => user.isSelected).length;

  return (
    <>
      <UserCounter selected={selectedCount} total={users.length} />
      <UserCards
        users={users}
        onDeleteUser={handleDeleteUser}
        onToggleSelect={handleToggleSelect}
      />
    </>
  );
}
