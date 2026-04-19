import React from "react";
import { Link } from "react-router-dom";

import { FaGithubSquare, FaLinkedin, FaInstagramSquare, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <style>{`
        .footer {
          background: linear-gradient(135deg, #0f172a, #1e293b);
          color: white;
          padding: 40px 20px;
          text-align: center;
        }

        .footer h2 {
          margin-bottom: 10px;
          font-weight: bold;
        }

        .footer p {
          color: #94a3b8;
          margin-bottom: 20px;
        }

        .footer-links {
          margin: 20px 0;
        }

        .footer-links a {
          color: white;
          margin: 0 15px;
          text-decoration: none;
          transition: 0.3s;
        }

        .footer-links a:hover {
          color: #38bdf8;
        }

        .social-icons {
          margin: 20px 0;
        }

        .social-icons a {
          margin: 0 10px;
          color: white;
          transition: 0.3s;
        }

        .social-icons a:hover {
          color: #22c55e;
          transform: scale(1.2);
        }

        .bottom-text {
          margin-top: 15px;
          font-size: 14px;
          color: #94a3b8;
        }
      `}</style>

      <footer className="footer">
        {/* NAME */}
        <h2>Anushka Yadav</h2>
        <p>Building modern web applications 🚀</p>

        {/* NAV LINKS */}
        <div className="footer-links">
        <Link className="nav-link" to="/">Home</Link>

        <Link className="nav-link" to="/personal_info">About</Link>

        <Link className="nav-link" to="/projects">Projects</Link>

       <Link className="nav-link" to="/contact_me">Contact</Link>

        </div>

        {/* SOCIAL ICONS */}
        <div className="social-icons">
          <a href="#"><FaGithubSquare size={35} /></a>
          <a href="#"><FaLinkedin size={35} /></a>
          <a href="#"><FaInstagramSquare size={35} /></a>
          <a href="#"><FaFacebook size={35} /></a>
        </div>

        {/* COPYRIGHT */}
        <div className="bottom-text">
          © 2026 Anushka Yadav | All Rights Reserved
        </div>
      </footer>
    </>
  );
};

export default Footer;