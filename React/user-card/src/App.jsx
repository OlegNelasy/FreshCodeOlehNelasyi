import UserCards from "./components/UserCards";
import { usersData } from "./data/usersData";

export default function App() {
  return <UserCards usersData={usersData} />;
}
