import React from "react";
import useGlobalState, { langMapping } from "../lib/globalState";

function Header({}) {
  const { lang, setLang } = useGlobalState();

  const handleMenuLogoClick = (e) => {
    e.preventDefault();
    window.history.replaceState(window.history.state, null, "/");
  };

  const handleChangeLang = (e) => {
    e.preventDefault();
    setLang(
      lang === langMapping.en_GB.code
        ? langMapping.it_IT.code
        : langMapping.en_GB.code
    );
  };

  return (
    <header>
      <div className="header-navbar h-100">
        <a
          id="menu-logo"
          className="navbar-brand"
          href="#"
          onClick={handleMenuLogoClick}
        >
          <span className="navbar-logo-image" />
        </a>
        <ul className="list-group menu text-center" id="menu">
          <li className="list-group-item">
            <a className="active" href="#hero" onClick={handleMenuLogoClick}>
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
          {/*<li className="list-group-item">
            <a href="#blog">
              <i className="fa fa-file-text" />
              <span>blog</span>
            </a>
          </li>*/}
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
        <div className="menu lang-toggler">
          <li className="list-group-item text-center">
            <a href="#!" onClick={(e) => handleChangeLang(e)}>
              <i className="fa fa-flag" />
              <span>
                {lang === langMapping.en_GB.code
                  ? langMapping.it_IT.name
                  : langMapping.en_GB.name}
              </span>
            </a>
          </li>
        </div>
      </div>
    </header>
  );
}

export default Header;
