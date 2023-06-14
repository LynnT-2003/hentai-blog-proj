import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { UserContext } from "./UserContext";

export default function Header() {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch("http://localhost:4000/profile", {
      credentials: "include",
    }).then((response) => {
      response.json().then((userInfo) => {
        setUserInfo(userInfo);
      }); // this is an async function
    });
  }, []);

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <header>
      <Link to="/" className="logo">
        WeebHive
      </Link>
      <nav className="nav-container">
        {username ? (
          <>
            <Link to="/create" className="nav-link">
              Create new post
            </Link>
            <a onClick={logout} className="nav-link">
              Logout
            </a>
          </>
        ) : (
          <>
            <Link to="/login" className="nav-link">
              Login
            </Link>
            <Link to="/register" className="nav-link">
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
