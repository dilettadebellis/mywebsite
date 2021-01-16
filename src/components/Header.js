import React from "react";

function Header({}) {
  return (
    <header>
      <div className="header-navbar h-100">
        <a className="navbar-brand" href="#">
          <b>A</b>
          <span>Arshia</span>
        </a>
        <ul className="list-group menu text-center" id="menu">
          <li className="list-group-item">
            <a className="active" href="#hero">
              <i className="fa fa-home" />
              <span>home</span>
            </a>
          </li>
          <li className="list-group-item">
            <a href="#about">
              <i className="fa fa-user" />
              <span>about</span>
            </a>
          </li>
          <li className="list-group-item">
            <a href="#resume">
              <i className="fa fa-address-book" />
              <span>resume</span>
            </a>
          </li>
          <li className="list-group-item">
            <a href="#portfolio">
              <i className="fa fa-briefcase" />
              <span>works</span>
            </a>
          </li>
          <li className="list-group-item">
            <a href="#blog">
              <i className="fa fa-file-text" />
              <span>blog</span>
            </a>
          </li>
          <li className="list-group-item">
            <a href="#contact">
              <i className="fa fa-envelope-open" />
              <span>contact</span>
            </a>
          </li>
        </ul>
        <div className="menu-toggler">
          <span>
            <i className="text-white lni-menu" />
          </span>
        </div>
      </div>
    </header>
  );
}

export default Header;
