import React from "react";
import "./clubs.css";
import MainNavbar from "../../components/navbar/main_navbar";
import Footer from "../../components/footer";

// import images from src/assets
import oscImg from "../../assets/OSC.png";
import ieeeImg from "../../assets/IEEE.png";
import basketballImg from "../../assets/Basketball.png";
import cricketImg from "../../assets/Cricket.png";
import natrajImg from "../../assets/Natraj.png";
import panacheImg from "../../assets/panache.png";

export default function Clubs() {
  return (
    <>
      <MainNavbar />

      {/* Page header */}
      <header className="page-header">
        <h1>Discover Amazing Clubs at Chitkara University</h1>
      </header>

      {/* Technical Clubs */}
      <section className="club-section">
        <h2>Technical Clubs</h2>
        <div className="card-container">
          <div className="club-card">
            <img src={oscImg} alt="Open Source Chandigarh" />
            <div className="card-content">
              <h3>Open-Source Chandigarh</h3>
              <p>Join the community of developers, contribute to open-source projects, and build innovative solutions together.</p>
              <a className="know-more" href="/osc">Know More</a>
            </div>
          </div>

          <div className="club-card">
            <img src={ieeeImg} alt="IEEE CUIET" />
            <div className="card-content">
              <h3>IEEE CUIET</h3>
              <p>Enhance your technical skills through workshops, hackathons, and industry networking opportunities.</p>
              <a className="know-more" href="/ieee">Know More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Sports Clubs */}
      <section className="club-section">
        <h2>Sports Clubs</h2>
        <div className="card-container">
          <div className="club-card">
            <img src={basketballImg} alt="Basketball Club" />
            <div className="card-content">
              <h3>Basketball Club CUIET</h3>
              <p>Dribble your way to excellence! Join our competitive team and showcase your basketball prowess.</p>
              <a className="know-more" href="/basketball">Know More</a>
            </div>
          </div>

          <div className="club-card">
            <img src={cricketImg} alt="Cricket Club" />
            <div className="card-content">
              <h3>Cricket Mania CUIET</h3>
              <p>Master the gentleman's game while building teamwork, fitness, and championship-winning strategies.</p>
              <a className="know-more" href="/cricket">Know More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Talent Clubs */}
      <section className="club-section">
        <h2>Talent Clubs</h2>
        <div className="card-container">
          <div className="club-card">
            <img src={natrajImg} alt="Natraj" />
            <div className="card-content">
              <h3>C2S2 Natraj</h3>
              <p>Experience the grace and beauty of classical dance. Perfect your art and perform on grand stages.</p>
              <a className="know-more" href="/natraj">Know More</a>
            </div>
          </div>

          <div className="club-card">
            <img src={panacheImg} alt="Panache" />
            <div className="card-content">
              <h3>C2S2 Panache</h3>
              <p>Express your creativity through fashion. Design, model, and bring style to life at Chitkara's premier fashion club.</p>
              <a className="know-more" href="/panache">Know More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
