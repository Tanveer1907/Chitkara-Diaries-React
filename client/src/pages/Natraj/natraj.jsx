import React from "react";
import "./natraj.css";
import MainNavbar from "../../components/navbar/main_navbar.jsx";

// Update these imports to your real image paths
import heroMain from "../../assets/n2.jpg";
import heroSide1 from "../../assets/n4.jpg";
import heroSide2 from "../../assets/n5.jpg";
import look1 from "../../assets/n1.jpg";
import look2 from "../../assets/n2.jpg";
import look3 from "../../assets/n3.jpg";
import heroVideo from "../../assets/natrajvid.mp4";

export default function Panache() {
  return (
    <>
      <MainNavbar />

      <main className="panache-page">
        {/* HERO */}
        <section className="panache-hero">
          <div className="panache-hero-content">
            <p className="panache-tagline">C2S2 · Natraj</p>
            <h1>
              The runway starts
              <span> on campus.</span>
            </h1>
            <p className="panache-subtext">
              Official Classical dance club of Chitkara University.
              Natraj celebrates the rich heritage of Indian classical dance, bringing together discipline, artistry, and devotion to rhythm.
Our performers carry forward timeless traditions while creating soulful, captivating experiences on stage.
            </p>


            <div className="panache-pills">
              <div className="pill">
                <span className="pill-label">Dance Shows</span>
                <span className="pill-value">10+ / year</span>
              </div>
              <div className="pill">
                <span className="pill-label">Members</span>
                <span className="pill-value">90+ active</span>
              </div>
              <div className="pill">
                <span className="pill-label">Stage Hours</span>
                <span className="pill-value">500+ hrs</span>
              </div>
            </div>
          </div>

          <div className="panache-hero-visual">
            <div className="hero-main-frame">
              <img src={heroMain} alt="Panache runway" />
              
            </div>

            <div className="hero-floating hero-floating-top">
              <img src={heroSide1} alt="Editorial pose" />
              
            </div>

            <div className="hero-floating hero-floating-bottom">
              <img src={heroSide2} alt="Backstage moments" />
              
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <section className="panache-marquee">
          <div className="marquee-track">
            <span>RUNWAY • EDITORIAL • STREET • CULTURE •</span>
            <span>CHARISMA • CONFIDENCE • PANACHE •</span>
          </div>
        </section>

        {/* MAIN GRID: FORM + JOURNEY */}
        {/* MAIN GRID: FORM + HIGHLIGHT VIDEO */}
<section className="panache-main-grid">

  {/* FORM */}
  <div className="panache-card panache-form-card">
    <h2>Audition Interest Form</h2>
    <p className="card-intro">
      Tell us who you are and how you want to show up on stage. This is
      not the final selection form – it helps us reach out before
      auditions open.
    </p>

    <form className="panache-form">
      <div className="form-grid">
        <div className="form-group floating">
          <input type="text" placeholder=" " required />
          <label>Full Name *</label>
        </div>
        <div className="form-group floating">
          <input type="email" placeholder=" " required />
          <label>Email *</label>
        </div>
        <div className="form-group floating">
          <input type="tel" placeholder=" " required />
          <label>Contact Number *</label>
        </div>
      </div>

      <button type="submit" className="panache-submit">
        Submit interest
      </button>
    </form>
  </div>

  {/* HIGHLIGHT VIDEO — replacing Journey 100% */}
  <div className="panache-card panache-video-card">
    <h2>Highlights</h2>
    <p className="card-intro">Experience the elegance, attitude and artistry of Natraj.</p>

    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        marginTop: "20px",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "550px",
          height: "350px",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
          background: "#fff",
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>
    </div>
  </div>

</section>


        {/* LOOKBOOK STRIP */}
        <section className="panache-lookbook">
          <div className="lookbook-header">
            <h2>Lookbook Moments</h2>
            <p>
              A glimpse into the stories we’ve told on stage – each segment with
              its own attitude.
            </p>
          </div>

          <div className="lookbook-grid">
            <article className="look-card">
              <div className="look-image-wrap">
                <img src={look1} alt="Showstopper look" />
                <span className="look-tag">Showstopper</span>
              </div>
              <h3>Fest Finale Walk</h3>
              <p>
                High-drama silhouettes, synchronized dance and a closing
                formation that shuts the stage down.
              </p>
            </article>

            <article className="look-card">
              <div className="look-image-wrap">
                <img src={look2} alt="Editorial shoot" />
                <span className="look-tag">Editorial</span>
              </div>
              <h3>Monochrome Editorial Set</h3>
              <p>
                Structured poses and controlled lighting that focus on face,
                attitude and micro-expressions.
              </p>
            </article>

            <article className="look-card">
              <div className="look-image-wrap">
                <img src={look3} alt="Street culture" />
                <span className="look-tag">Street</span>
              </div>
              <h3>Street Culture Capsule</h3>
              <p>
                Sneakers, layers and movement-heavy choreography built for raw
                energy and crowd interaction.
              </p>
            </article>
          </div>
        </section>
        



        {/* FOOTER */}
        <footer className="bb-footer">
          <div className="bb-footer-inner">
            <div className="bb-footer-info">
              <h3>Basketball Program Coordinator</h3>
              <p>
                <strong>Name:</strong> Arjun Kapoor
              </p>
              <p>
                <strong>Phone:</strong> +91 98765 43210
              </p>
              <p>
                <strong>Email:</strong> arjun.kapoor@chitkara.edu.in
              </p>
            </div>

            <div className="bb-footer-social">
              <h3>Connect with Chitkara University</h3>
              <div className="bb-social-icons">
                <a href="https://www.linkedin.com/school/chitkara-university/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://www.instagram.com/chitkarau" target="_blank"><i className="fab fa-instagram"></i></a>
              <a href="https://youtube.com/@chitkarauniversity" target="_blank"><i className="fab fa-youtube"></i></a>
            </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}
