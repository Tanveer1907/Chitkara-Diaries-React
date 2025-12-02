import React, { useEffect, useState } from "react";
import "./cricket.css";
import "../../styles/club-form.css";
import MainNavbar from "../../components/navbar/main_navbar.jsx";
import ClubFooter from "../../components/ClubFooter/ClubFooter.jsx";

// Adjust these paths to match your actual files
import heroVideo from "../../assets/cricketvid.mp4";
import heroImg from "../../assets/ckt6.jpg";
import strip1 from "../../assets/ckt1.jpg";
import strip2 from "../../assets/ckt2.jpg";
import strip3 from "../../assets/ckt3.jpg";
import strip4 from "../../assets/ckt4.jpg";
import strip5 from "../../assets/ckt5.jpg";

export default function Cricket() {
  const stripImages = [strip1, strip2, strip3, strip4, strip5];

  const [stats, setStats] = useState({
    runs: 0,
    wickets: 0,
    matches: 0,
  });

  // simple stat animation when spotlight enters viewport
  useEffect(() => {
    const target = { runs: 1240, wickets: 56, matches: 72 };
    let started = false;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          started = true;

          const interval = setInterval(() => {
            setStats((prev) => {
              const next = {
                runs:
                  prev.runs < target.runs ? prev.runs + 40 : target.runs,
                wickets:
                  prev.wickets < target.wickets
                    ? prev.wickets + 2
                    : target.wickets,
                matches:
                  prev.matches < target.matches
                    ? prev.matches + 1
                    : target.matches,
              };

              if (
                next.runs === target.runs &&
                next.wickets === target.wickets &&
                next.matches === target.matches
              ) {
                clearInterval(interval);
              }

              return next;
            });
          }, 50);
        }
      },
      { threshold: 0.4 }
    );

    const el = document.getElementById("cricket-spotlight");
    if (el) observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="cricket-page">
      <MainNavbar />

      {/* ===== HERO SECTION ===== */}
      <section className="cricket-hero">
        <div className="cricket-hero-overlay" />

        <div className="cricket-hero-inner">
          <div className="cricket-hero-content">
            <p className="cricket-tagline">Chitkara University · Cricket</p>
            <h1>The Grit &amp; Glory of Chitkara Cricket</h1>
            <p className="cricket-subtext">
              Discipline, dedication and match-tempo mindset. Chitkara’s
              university squad mixes raw power with smart strategy – from
              blistering T20s to patient long-format graft.
            </p>

            <div className="cricket-meta-row">
              <div className="meta-pill">
                <span className="dot" />
                Inter-University Champions
              </div>
              <div className="meta-pill">Professional coaching setup</div>
            </div>
          </div>

          <div className="cricket-hero-strip">
            <div className="cricket-strip-track">
              {stripImages.concat(stripImages).map((img, idx) => (
                <div className="cricket-strip-item" key={idx}>
                  <img src={img} alt={`Cricket highlight ${idx + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="cricket-about">
        <div className="cricket-about-inner">
          <div className="cricket-about-text">
            <h2>Built on Discipline. Driven by Passion.</h2>
            <p>
              At Chitkara University, the cricket team isn&apos;t just a
              lineup—it&apos;s a system. Batsmen who build and finish, bowlers
              who hunt in spells, and fielders who treat every ball as a
              chance.
            </p>
            <p>
              Training blends strength, endurance, skills and scenarios at our
              turf wickets and nets built for match-level intensity. Every
              session is designed to simulate real pressure: death overs, tricky
              chases, and powerplay bursts.
            </p>
            <p>
              Beyond trophies, we care about mindset—composure under lights,
              respect for the game, and ownership of the team&apos;s badge.
            </p>
          </div>

          <div className="cricket-about-media">
            <div className="cricket-video-card">
              <span className="cricket-video-badge">Inside the camp</span>
              <video
                className="cricket-video"
                src={heroVideo}
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          </div>
        </div>
      </section>

      {/* ===== SPOTLIGHT SECTION ONLY (NO TABLE / FORM) ===== */}
      <section className="cricket-spotlight-section">
        <div
          className="cricket-spotlight-card"
          id="cricket-spotlight"
        >
          <div className="spotlight-left">
            <div className="spotlight-image-wrap">
              <img
                src={heroImg}
                alt="Vikram Singh - Captain"
                className="spotlight-img"
              />
              <span className="jersey-chip">#10 · Captain</span>
            </div>
          </div>

          <div className="spotlight-right">
            <p className="spotlight-tag">Player Spotlight</p>
            <h3>Vikram Singh</h3>
            <p className="spotlight-role">
              Top-order batter · Occasional seam · Team anchor in chases
            </p>

            <ul className="stat-list">
              <li>
                <span className="stat-label">Total Runs</span>
                <span className="stat-value">{stats.runs}</span>
              </li>
              <li>
                <span className="stat-label">Wickets</span>
                <span className="stat-value">{stats.wickets}</span>
              </li>
              <li>
                <span className="stat-label">Matches Played</span>
                <span className="stat-value">{stats.matches}</span>
              </li>
            </ul>

            <p className="spotlight-summary">
              Known for calm finishes under pressure, Vikram balances aggression
              and calculation—switching from strike rotation to boundary-hitting
              when it matters. Off the field, he sets standards for fitness,
              punctuality and discipline.
            </p>
          </div>
        </div>
      </section>

      {/* ===== EVENTS (KEPT SIMPLE) ===== */}
      <section className="cricket-events">
        <div className="container-narrow">
          <h2>📅 Upcoming Events</h2>

          <div className="events-grid">
            <article className="event-card">
              <div className="event-date">
                <span className="month">JAN</span>
                <span className="day">25</span>
              </div>
              <div className="event-body">
                <h3>Fast Bowling Masterclass</h3>
                <p>
                  Session with former state pacer on seam position, yorkers and
                  death-overs planning.
                </p>
                <span className="event-location">
                  CU Cricket Nets · Evening Slot
                </span>
              </div>
            </article>

            <article className="event-card">
              <div className="event-date">
                <span className="month">FEB</span>
                <span className="day">01</span>
              </div>
              <div className="event-body">
                <h3>Alumni vs Current Squad</h3>
                <p>
                  T10 exhibition under lights—current squad vs Chitkara alumni
                  stars. Open for all students.
                </p>
                <span className="event-location">
                  Main Ground Turf · Night Match
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ===== REGISTRATION FORM ===== */}
      <section className="cricket-form-section" style={{ padding: "40px 7vw 60px" }}>
        <div className="club-card club-form-card">
          <h2>🏏 Join the Cricket Squad</h2>
          <p className="club-form-intro">
            Register your interest for the upcoming trials.
          </p>

          <form className="club-form" onSubmit={(e) => {
            e.preventDefault();
            alert("Registration submitted for Cricket trials!");
          }}>
            <div className="club-form-grid">
              <div className="club-input-group club-floating">
                <input type="text" required placeholder=" " />
                <label>First Name *</label>
              </div>

              <div className="club-input-group club-floating">
                <input type="text" required placeholder=" " />
                <label>Last Name *</label>
              </div>

              <div className="club-input-group club-floating">
                <input type="email" required placeholder=" " />
                <label>Email *</label>
              </div>

              <div className="club-input-group club-floating">
                <input type="tel" required placeholder=" " />
                <label>Phone Number *</label>
              </div>

              <div className="club-input-group">
                <label>Role *</label>
                <select required>
                  <option value="">Select Role</option>
                  <option>Batsman</option>
                  <option>Bowler (Pace)</option>
                  <option>Bowler (Spin)</option>
                  <option>All-Rounder</option>
                  <option>Wicket Keeper</option>
                </select>
              </div>

              <div className="club-input-group">
                <label>Batting Style</label>
                <select>
                  <option value="">Select Style</option>
                  <option>Right Hand</option>
                  <option>Left Hand</option>
                </select>
              </div>

              <div className="club-input-group club-floating club-full">
                <textarea placeholder=" " />
                <label>Past Experience / Achievements</label>
              </div>
            </div>

            <button type="submit" className="club-btn-full">
              Submit Registration
            </button>
          </form>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <ClubFooter
        coordinatorName="Arjun Kapoor"
        coordinatorPhone="+91 98765 43210"
        coordinatorEmail="arjun.kapoor@chitkara.edu.in"
      />
    </div>
  );
}
