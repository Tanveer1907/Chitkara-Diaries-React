import React from "react";
import loaderLogo from "../../assets/logo.jpg";
import "../../styles/club-form.css"; // Ensure styles are tailored here

const StatusFeedback = ({ loading, success, onClose, successMessage = "You have been registered successfully!" }) => {
    if (loading) {
        return (
            <div className="club-loader-overlay">
                <img src={loaderLogo} alt="Loading..." className="club-loader-logo" />
                <div className="club-loader-text">Processing Request...</div>
            </div>
        );
    }

    if (success) {
        return (
            <div className="club-success-overlay">
                <div className="club-success-modal">
                    <div className="success-icon">🎉</div>
                    <h3>Success!</h3>
                    <p>{successMessage}</p>
                    <button className="club-success-btn" onClick={onClose}>
                        Done
                    </button>
                </div>
            </div>
        );
    }

    return null;
};

export default StatusFeedback;
