import React from "react";
import "./ClubFooter.css";

export default function ClubFooter({
    coordinatorName = "Club Coordinator",
    coordinatorPhone = "+91 00000 00000",
    coordinatorEmail = "coordinator@chitkara.edu.in",
}) {
    return (
        <footer className="clean-footer">
            <div className="footer-left">
                <h3>Team Coordinator</h3>
                <p>
                    <strong>Name:</strong> {coordinatorName}
                </p>
                <p>
                    <strong>Phone:</strong> {coordinatorPhone}
                </p>
                <p>
                    <strong>Email:</strong> {coordinatorEmail}
                </p>
            </div>

            <div className="footer-right">
                <h3>Connect with Chitkara University</h3>
                <div className="footer-icons">
                    <a
                        href="https://www.linkedin.com/school/chitkara-university/"
                        className="linkedin"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fab fa-linkedin"></i>
                    </a>

                    <a
                        href="https://www.instagram.com/chitkarau"
                        className="instagram"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fab fa-instagram"></i>
                    </a>

                    <a
                        href="https://youtube.com/@chitkarauniversity"
                        className="youtube"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
}
