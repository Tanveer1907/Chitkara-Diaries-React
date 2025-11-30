import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/logo.jpg"; // put image in src/assets/

export default function MainNavbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser && storedUser !== "undefined") {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Failed to parse user data:", error);
        localStorage.removeItem("user"); // Clear invalid data
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    window.location.href = "/auth";
  };

  return (
    <div className="navbar">
      <div className="nav-left">
        <img src={logo} alt="logo" className="navbar-logo" />
        <h1 className="navbar-title">Chitkara Diaries</h1>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/journal">Journal</Link>
        <Link to="/voting">Popular</Link>
        <Link to="/clubs">Clubs</Link>
        {user ? (
          <div className="nav-user-container">
            <div className="user-avatar">
              {user.fullname
                ? user.fullname.split(" ").map((n) => n[0]).join("").toUpperCase().substring(0, 2)
                : "U"}
            </div>

            {/* Dropdown Menu */}
            <div className="user-dropdown">
              <Link to="/profile" className="dropdown-item">
                <i className="fas fa-user-edit"></i> Edit Profile
              </Link>
              <div className="dropdown-divider"></div>
              <div className="dropdown-item" onClick={handleLogout}>
                <i className="fas fa-sign-out-alt"></i> Logout
              </div>
            </div>
          </div>
        ) : (
          <Link to="/auth">Login</Link>
        )}
      </div>
    </div>
  );
}
