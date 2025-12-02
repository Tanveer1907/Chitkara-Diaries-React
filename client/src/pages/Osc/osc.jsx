import React, { useState } from "react";
import "./osc.css";
import "../../styles/club-form.css";
import MainNavbar from "../../components/navbar/main_navbar";
import ClubFooter from "../../components/ClubFooter/ClubFooter";

import img1 from "../../assets/osc1.jpg";
import img2 from "../../assets/osc2.jpg";
import img3 from "../../assets/osc3.jpg";
import img4 from "../../assets/osc4.jpg";
import img5 from "../../assets/osc5.jpg";
import img6 from "../../assets/osc6.jpg";
import img7 from "../../assets/osc7.jpg";
import openSourceVideo from "../../assets/openSouce.mp4";

export default function Osc() {

  // Form State
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    age: "",
    preferred_team: "",
    year: "",
    skills: ""
  });

  const [message, setMessage] = useState("");

  // Handle Input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle Submit -> Backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Submitting...");

    try {
      const res = await fetch("http://localhost:5000/api/osc/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (data.success) {
        setMessage("Registration successful!");
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          phone: "",
          age: "",
          preferred_team: "",
          year: "",
          skills: ""
        });
      } else {
        setMessage(data.message || "Something went wrong.");
      }
    } catch (err) {
      setMessage("Server error.");
    }
  };

  return (
    <>
      <MainNavbar />
      <div className="top-gap"></div>
      {/* Moving Images */}
      <div className="moving-images-container">
        <div className="moving-strip">
          <div className="moving-image"><img src={img1} alt="img1" /></div>
          <div className="moving-image"><img src={img2} alt="img2" /></div>
          <div className="moving-image"><img src={img3} alt="img3" /></div>
          <div className="moving-image"><img src={img4} alt="img4" /></div>
          <div className="moving-image"><img src={img5} alt="img5" /></div>
          <div className="moving-image"><img src={img6} alt="img6" /></div>
          <div className="moving-image"><img src={img7} alt="img7" /></div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="about-container">
        <div className="about-text">
          <h2>About Us - Chitkara University Open Source Chandigarh</h2>

          <p>
            At Chitkara University Open Source Chandigarh(OSC), we believe in the power of
            collaboration, innovation, and community. Our mission is to create a vibrant
            ecosystem where students, developers, and technology enthusiasts can learn, share,
            and contribute to the world of open-source.
          </p>

          <p>
            We are more than just a university club - we are a student-led tech community that
            thrives on curiosity, creativity, and inclusivity. From coding marathons and
            hackathons to workshops, meetups, and real-world projects, CUOSC provides a
            platform for every learner to explore the latest in Open Source, Web, AI/ML, Cloud,
            DevOps, and Cybersecurity.
          </p>

          <p>
            Whether you are a beginner exploring your first line of code or a seasoned
            developer contributing to large projects, OSC is the place where you can grow,
            network, and make an impact.
          </p>
        </div>

        <div className="about-image">
          <div className="basketball-court">
            <video autoPlay muted loop playsInline>
              <source src={openSourceVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>

      {/* Achievements + Registration */}
      <div className="main-container">

        <div className="achievements-container">
          <h2>🏆 Team Achievements</h2>

          <div className="timeline-item left">
            <div className="timeline-content">
              <h3>🏆 Smart India Hackathon</h3>
              <span className="tag">National</span>
              <p>Winners in Software Category.</p>
            </div>
          </div>

          <div className="timeline-item right">
            <div className="timeline-content">
              <h3>🌍 Google Summer of Code</h3>
              <span className="tag">International</span>
              <p>3 students selected as contributors.</p>
            </div>
          </div>
        </div>

        {/* Registration Form */}
        <div className="club-card club-form-card">
          <h2>Join Our Team</h2>

          <form className="club-form" onSubmit={handleSubmit}>
            <div className="club-form-grid">

              <div className="club-input-group club-floating">
                <input name="first_name" value={formData.first_name} onChange={handleChange} type="text" required placeholder=" " />
                <label>First Name *</label>
              </div>

              <div className="club-input-group club-floating">
                <input name="last_name" value={formData.last_name} onChange={handleChange} type="text" required placeholder=" " />
                <label>Last Name *</label>
              </div>

              <div className="club-input-group club-floating">
                <input name="email" value={formData.email} onChange={handleChange} type="email" required placeholder=" " />
                <label>Email *</label>
              </div>

              <div className="club-input-group club-floating">
                <input name="phone" value={formData.phone} onChange={handleChange} type="tel" required placeholder=" " />
                <label>Phone *</label>
              </div>

              <div className="club-input-group club-floating">
                <input name="age" value={formData.age} onChange={handleChange} type="number" required placeholder=" " />
                <label>Age *</label>
              </div>

              <div className="club-input-group">
                <label>Preferred Team</label>
                <select name="preferred_team" value={formData.preferred_team} onChange={handleChange}>
                  <option hidden></option>
                  <option value="organizing">Organizing Team</option>
                  <option value="media">Media Team</option>
                  <option value="graphics">Graphics Team</option>
                  <option value="discipline">Discipline Team</option>
                  <option value="technical">Technical Team</option>
                  <option value="content">Content Team</option>
                  <option value="promotion">Promotion Team</option>
                </select>
              </div>

              <div className="club-input-group">
                <label>Year *</label>
                <select name="year" value={formData.year} onChange={handleChange} required>
                  <option hidden></option>
                  <option value="1st">1st Year</option>
                  <option value="2nd">2nd Year</option>
                  <option value="3rd">3rd Year</option>
                  <option value="4th">4th Year</option>
                </select>
              </div>

              <div className="club-input-group club-floating club-full">
                <textarea name="skills" value={formData.skills} onChange={handleChange} placeholder=" "></textarea>
                <label>Skills</label>
              </div>

            </div>

            <button type="submit" className="club-btn-full">Register</button>

            {message && <p className="club-form-intro" style={{ marginTop: "10px", color: message.includes("success") ? "green" : "red" }}>{message}</p>}
          </form>
        </div>

      </div>

      {/* Footer */}
      <ClubFooter
        coordinatorName="Prateek Sharma"
        coordinatorPhone="+91 98765 43820"
        coordinatorEmail="prateek.sharma@chitkara.edu.in"
      />

    </>
  );
}
