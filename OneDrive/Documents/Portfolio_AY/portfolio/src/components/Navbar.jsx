import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <style>{`
        .navbar-custom {
          position: sticky;
          top: 0;
          z-index: 1000;
          background: linear-gradient(135deg, #0f172a, #1e293b);
          padding: 10px 30px;
        }

        .navbar-brand {
          color: white !important;
          font-weight: bold;
          font-size: 22px;
        }

        .nav-link {
          color: #cbd5f5 !important;
          margin-right: 20px;
          position: relative;
          transition: 0.3s;
        }

        
        .nav-link::after {
          content: "";
          position: absolute;
          width: 0%;
          height: 2px;
          bottom: 0;
          left: 0;
          background-color: #38bdf8;
          transition: 0.3s;
        }

        .nav-link:hover::after {
          width: 100%;
        }

        .nav-link:hover {
          color: white !important;
        }

        .navbar-toggler {
          border: none;
        }

        .navbar-toggler:focus {
          box-shadow: none;
        }
      `}</style>

      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container-fluid">
          
          
          <Link className="navbar-brand" to="/">
            Anushka.dev
          </Link>

          
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          
          <div className="collapse navbar-collapse" id="navbarContent">
            <ul className="navbar-nav ms-auto">
              
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/projects">Projects</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/personal_info">About</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact_me">Contact</Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;``