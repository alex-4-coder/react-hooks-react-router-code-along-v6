import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/users")
      .then((r) => r.json())
      .then(setUsers)
      .catch(console.error);
  }, []);

  const userList = users.map((user) => (
    <div key={user.id}>
      <h3>{user.name}</h3>
      <a href={`/profile/${user.id}`}>View Profile</a>
    </div>
  ));

  return (
    <>
      <header>
        <NavBar />
      </header>
      <main>
        <h1>Home!</h1>
        {userList}
      </main>
    </>
  );
}

export default Home;
