import React from "react";
import mapImg from "../assets/chitkara_map.jpg";
import "./../pages/Home/homepage.css";

export default function CampusMap() {

  // Same link for now (as you said)
  const insta360Link =
    "https://cloud-sg.insta360.com/share/sg/3z212w2q3o2y288v0913285120/player?mediaId=322232257051889664&businessId=322232281018142720";

  const locations = [
    { name: "Square One", top: "42%", left: "38%", link: insta360Link },
    { name: "Turing Block", top: "30%", left: "63%", link: insta360Link },
    { name: "Central Library", top: "52%", left: "60%", link: insta360Link },
    { name: "Rockfeller", top: "55%", left: "25%", link: insta360Link }, // updated
  ];

  return (
    <div className="static-map-container">
      <div className="map-wrapper">
        <img src={mapImg} className="static-map-img" alt="Campus Map" />

        {locations.map((loc, i) => (
          <div
            key={i}
            className="pin"
            style={{ top: loc.top, left: loc.left }}
            onClick={() => window.open(loc.link, "_blank")}
          >
            <div className="pin-inner"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
