import React, { useState } from "react";
import "./journal.css";
import MainNavbar from "../../components/navbar/main_navbar";

import j1 from "../../assets/j1.mp4";
import j2 from "../../assets/j2.mp4";
import j3 from "../../assets/j3.jpg";
import j4 from "../../assets/j4.mp4";

export default function Journal() {
  const spreads = [
    { left: j1, right: j2 },
    { left: j3, right: j4 },
  ];

  const [idx, setIdx] = useState(0);

  function prev() {
    if (idx > 0) setIdx(idx - 1);
  }

  function next() {
    if (idx < spreads.length - 1) setIdx(idx + 1);
  }

  function Media({ src, alt }) {
    if (!src) return null;

    const isVideo =
      src.endsWith(".mp4") ||
      src.endsWith(".webm") ||
      src.endsWith(".ogg");

    if (isVideo) {
      return (
        <video
          className="journal-media"
          src={src}
          autoPlay
          loop
          muted
          playsInline
        />
      );
    }

    return <img className="journal-media" src={src} alt={alt} />;
  }

  return (
    <div className="journal-root">
      <MainNavbar />

      {/* MOVED HERE → Below Header */}
      <header className="journal-header">
        Our Journals — From The Books of Our Students
      </header>

      {/* FIXED CONTROLS POSITION */}
      <div className="journal-controls">
        <button className="journal-btn" onClick={prev} disabled={idx === 0}>
          ◀ Prev
        </button>

        <span className="page-counter">
          Spread {idx + 1} / {spreads.length}
        </span>

        <button
          className="journal-btn"
          onClick={next}
          disabled={idx === spreads.length - 1}
        >
          Next ▶
        </button>
      </div>

      <div className="journal-bg">
        <div className="journal-book">
          <div className="page left">
            <Media src={spreads[idx].left} alt="Left page" />
          </div>

          <div className="page right">
            <Media src={spreads[idx].right} alt="Right page" />
          </div>
        </div>
      </div>

      <footer className="footer">
        © 2025 Chitkara Diaries — All Rights Reserved
      </footer>
    </div>
  );
}
