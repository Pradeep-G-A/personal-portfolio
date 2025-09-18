import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "@mui/material/Link";
import "../portfolio/portfolio.css";

export const ProfileSection = () => {
  return (
    <div className="profile-wrapper">
      <div className="profile-card">
        <div className="profile-avatar-wrapper">
          <div className="profile-avatar"></div>
        </div>
        {/* <h1 className="profile-name">Pradeep G A</h1> */}
        <h1 aria-label="Hi! I'm Pradeep" className="profile-name">
          Hi! I'm&nbsp;<span class="typewriter"></span>
        </h1>
        <div className="profile-role">Full Stack Developer</div>
        <div className="profile-details">
          <div className="profile-row">
            <div className="profile-icon-wrapper">
              <EmailIcon />
            </div>
            <a
              href="mailto:gapradeep123@gmail.com"
              className="profile-info link"
            >
              gapradeep123@gmail.com
            </a>
          </div>
          <div className="profile-row">
            <div className="profile-icon-wrapper">
              <CallIcon />
            </div>
            <span className="profile-info">+91 6369114503</span>
          </div>
          <div className="profile-row">
            <div className="profile-icon-wrapper">
              <GitHubIcon />
            </div>
            <Link
              href="https://github.com/Pradeep-G-A"
              target="_blank"
              className="profile-info link"
            >
              GitHub
            </Link>
          </div>
          <div className="profile-row">
            <div className="profile-icon-wrapper">
              <LocationOnIcon />
            </div>
            <span className="profile-info">Coimbatore, India</span>
          </div>
        </div>
      </div>
    </div>
  );
};
