import styles from "./App.module.css";
import UserCard from "./components/UserCard";
const img =
  "https://img.magnific.com/free-photo/dark-blonde-bearded-man-crosses-his-hands-chest-posing-black-shirt_8353-1116.jpg?semt=ais_hybrid&w=740&q=80";

function App() {
  return (
    <UserCard
      photo={img}
      firstName={"Program"}
      lastName={"Programovich"}
      hashtag={"Programer"}
      stats={{ tweets: 1337, following: 561, followers: 718 }}
      isVerified={true}
      isMale={true}
    />
  );
}

export default App;
