import React from "react";
import reactLogo from "../assets/react.svg";

function Navbar() {
  return (
    <nav
      className="navbar navbar-expand-lg shadow bg-dark text-light"
      data-bs-theme="dark"
    >
      <div className="container-fluid px-lg-5">
        <div className="d-flex align-items-center">
          <img
            className="rotate-img"
            src={reactLogo}
            width={30}
            alt="react_logo"
          />
          <span className="navbar-brand ms-2 h2 mb-0 py-3">CryptoApp</span>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <a className="nav-link my-5 my-lg-3 fw-medium" href="#top-coins">
            <span>Top 5 Coins</span>
          </a>

          <a
            className="nav-link mt-5 mb-4 my-lg-3 me-5 fw-medium d-block d-lg-none"
            href="#more-coins"
          >
            <span>More Coins</span>
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
