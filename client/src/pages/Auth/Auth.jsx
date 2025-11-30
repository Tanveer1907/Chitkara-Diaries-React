import React, { useState } from "react";
import AuthNavbar from "../../components/navbar/authnavbar";
import "./auth.css";
import loaderLogo from "../../assets/logo.jpg";

export default function Auth() {
  const [showLogin, setShowLogin] = useState(true);
  const [loading, setLoading] = useState(false);

  // LOGIN state
  const [loginData, setLoginData] = useState({
    email: "",
    password: ""
  });

  // REGISTER state
  const [registerData, setRegisterData] = useState({
    fullname: "",
    roll: "",
    batch: "",
    course: "",
    email: "",
    password: ""
  });

  const [loginError, setLoginError] = useState("");
  const [registerError, setRegisterError] = useState("");

  // ---------------- LOGIN ----------------
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoginError("");

    if (!loginData.email || !loginData.password) {
      setLoginError("Please enter both fields.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginData),
      });

      const data = await res.json();

      setTimeout(() => {
        setLoading(false);
        if (data.success) {
          // Save user to localStorage
          localStorage.setItem("user", JSON.stringify(data.user));
          window.location.href = "/";
        } else {
          setLoginError(data.message || "Incorrect email or password");
        }
      }, 600);
    } catch {
      setLoading(false);
      setLoginError("Server error. Please try again later.");
    }
  };

  // ---------------- REGISTER ----------------
  const handleRegister = async (e) => {
    e.preventDefault();
    setRegisterError("");

    if (Object.values(registerData).some((v) => !v)) {
      setRegisterError("Please fill out all fields.");
      return;
    }

    if (!/^[^@]+@[^@]+\.[^@]+$/.test(registerData.email)) {
      setRegisterError("Enter a valid email.");
      return;
    }

    if (registerData.password.length < 6) {
      setRegisterError("Password must be at least 6 characters.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(registerData),
      });

      const data = await res.json();

      setTimeout(() => {
        setLoading(false);
        if (data.success) {
          // RESET form
          setRegisterData({
            fullname: "",
            roll: "",
            batch: "",
            course: "",
            email: "",
            password: ""
          });

          setShowLogin(true);
          setLoginError("Registration successful! Please login.");
        } else {
          setRegisterError(data.message || "Registration failed");
        }
      }, 600);
    } catch {
      setLoading(false);
      setRegisterError("Server error. Try again later.");
    }
  };

  const togglePassword = (id) => {
    const field = document.getElementById(id);
    if (field) field.type = field.type === "password" ? "text" : "password";
  };

  return (
    <>
      <AuthNavbar />
      <div style={{ paddingTop: 80 }} />

      <div className="login-container">
        <div className="login-wrapper">

          {/* LEFT HERO SECTION */}
          <div className="login-hero">
            <div className="hero-content">
              <h1>Campus Journey Begins Here</h1>
              <p>Discover events, connect with peers, and make the most of your campus life</p>

              <div className="stats-mini">
                <div className="stat-item">
                  <span className="stat-number">100+</span>
                  <span className="stat-label">Campus Events</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">30+</span>
                  <span className="stat-label">Student Clubs</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">24/7</span>
                  <span className="stat-label">Campus Access</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM SECTION */}
          <div className="login-form-section">
            <div className="form-container">

              <div className="tab-nav">
                <button
                  className={showLogin ? "active" : ""}
                  onClick={() => {
                    setShowLogin(true);
                    setLoginError("");
                    setRegisterError("");
                  }}
                >
                  Login
                </button>

                <button
                  className={!showLogin ? "active" : ""}
                  onClick={() => {
                    setShowLogin(false);
                    setLoginError("");
                    setRegisterError("");
                  }}
                >
                  Register
                </button>
              </div>

              {/* ----------- LOGIN FORM ----------- */}
              {showLogin ? (
                <form className="login-form" onSubmit={handleLogin}>

                  <div className="form-header">
                    <h2>Student Login</h2>
                    <p>Enter your details to access your account</p>
                  </div>

                  <div className="form-group">
                    <label>Email</label>
                    <div className="input-wrapper">
                      <i className="fas fa-envelope input-icon"></i>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={loginData.email}
                        onChange={(e) =>
                          setLoginData({ ...loginData, email: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="form-group password-wrapper">
                    <label>Password</label>
                    <div className="input-wrapper">
                      <i className="fas fa-lock input-icon"></i>
                      <input
                        type="password"
                        id="login-password"
                        name="password"
                        placeholder="Enter your password"
                        value={loginData.password}
                        onChange={(e) =>
                          setLoginData({ ...loginData, password: e.target.value })
                        }
                      />

                      <span className="password-toggle" onClick={() => togglePassword("login-password")}>
                        <i className="fa fa-eye"></i>
                      </span>
                    </div>
                  </div>

                  <div className="error-message">{loginError}</div>
                  <button type="submit" className="login-btn">Login to Chitkara Diaries</button>
                </form>
              ) : (
                // ----------- REGISTER FORM -----------
                <form className="login-form" onSubmit={handleRegister}>

                  <div className="form-header">
                    <h2>Create Account</h2>
                    <p>Sign up to get started</p>
                  </div>

                  {/* FULL NAME */}
                  <div className="form-group">
                    <label>Full Name</label>
                    <div className="input-wrapper">
                      <i className="fas fa-user input-icon"></i>
                      <input
                        type="text"
                        name="fullname"
                        placeholder="Enter your full name"
                        value={registerData.fullname}
                        onChange={(e) =>
                          setRegisterData({ ...registerData, fullname: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  {/* ROLL */}
                  <div className="form-group">
                    <label>Roll Number</label>
                    <div className="input-wrapper">
                      <i className="fas fa-id-card input-icon"></i>
                      <input
                        type="text"
                        name="roll"
                        placeholder="Enter roll number"
                        value={registerData.roll}
                        onChange={(e) =>
                          setRegisterData({ ...registerData, roll: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  {/* BATCH */}
                  <div className="form-group">
                    <label>Batch Year</label>
                    <div className="input-wrapper">
                      <i className="fas fa-calendar input-icon"></i>
                      <select
                        name="batch"
                        value={registerData.batch}
                        onChange={(e) =>
                          setRegisterData({ ...registerData, batch: e.target.value })
                        }
                      >
                        <option value="" disabled>Select batch year</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                        <option value="2024">2024</option>
                      </select>
                    </div>
                  </div>

                  {/* COURSE */}
                  <div className="form-group">
                    <label>Course</label>
                    <div className="input-wrapper">
                      <i className="fas fa-graduation-cap input-icon"></i>
                      <select
                        name="course"
                        value={registerData.course}
                        onChange={(e) =>
                          setRegisterData({ ...registerData, course: e.target.value })
                        }
                      >
                        <option value="" disabled>Select your course</option>
                        <option value="B.Tech">B.Tech</option>
                        <option value="BCA">BCA</option>
                        <option value="MBA">MBA</option>
                        <option value="M.Tech">M.Tech</option>
                      </select>
                    </div>
                  </div>

                  {/* EMAIL */}
                  <div className="form-group">
                    <label>Email Address</label>
                    <div className="input-wrapper">
                      <i className="fas fa-envelope input-icon"></i>
                      <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={registerData.email}
                        onChange={(e) =>
                          setRegisterData({ ...registerData, email: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  {/* PASSWORD */}
                  <div className="form-group password-wrapper">
                    <label>Password</label>
                    <div className="input-wrapper">
                      <i className="fas fa-lock input-icon"></i>
                      <input
                        type="password"
                        id="register-password"
                        name="password"
                        placeholder="Create your password"
                        value={registerData.password}
                        onChange={(e) =>
                          setRegisterData({ ...registerData, password: e.target.value })
                        }
                      />

                      <span className="password-toggle" onClick={() => togglePassword("register-password")}>
                        <i className="fa fa-eye"></i>
                      </span>
                    </div>
                  </div>

                  <div className="error-message">{registerError}</div>
                  <button type="submit" className="login-btn">Create Account</button>
                </form>
              )}

            </div>
          </div>

        </div>
      </div>

      {/* LOADER */}
      {loading && (
        <div id="loader" className="loader-overlay">
          <img src={loaderLogo} alt="Loading..." className="loader-logo" />
          <div className="loader-text">Processing...</div>
        </div>
      )}
    </>
  );
}
