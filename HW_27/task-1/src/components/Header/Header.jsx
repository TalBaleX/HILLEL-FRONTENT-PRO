import React from "react";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          My Website
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Main Page
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contacts">
                Contacts
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about-me">
                About Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
