import React from "react";
import "./Navbar.css";
import LogoIcon from "../../img/icon_Traceit.png";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      {/* image optional cause it's not suit here */}
      {/* <a className="navbar-brand" href="#">
        <img src={LogoIcon} width="120" height="40" alt="" />
      </a> */}

      <a className="navbar-brand" href="#">
        <span className="traceDes">TRACE</span>.IT
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#about">
              About the event
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#prizes">
              Prizes
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#rules">
              Rules
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#venue">
              Date & Venue
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#agenda">
              Schedule & Agenda
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="#contact">
              Contact Us
            </a>
          </li>
        </ul>
          <div className="navlink main-btn nav-btn">
            <a
              href="https://forms.gle/nEYgrjLcSym2vAVP9"
              target="_blank"
              rel="noreferrer"
            >
              Register
            </a>
          </div>
          <div className="follow-btn1">
                    <a
                        href="https://www.instagram.com/invites/contact/?igsh=kvhochijqkt&utm_content=vgr03cd"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Follow Us 😎
                    </a>
                </div>
      </div>
    </nav>
  );
}

export default Navbar;
