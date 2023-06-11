import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Header() {
  const [username, setUsername] = useState(null);
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUsername(userInfo.username);
      }); // this is an async function
    });
  }, []);
  return (
    <header>
      <Link to="/" className="logo">
        WeebHives
      </Link>
      <nav>
        {username && (
          <>
            <Link to="/create">Create new post</Link>
            <a>Logout</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
