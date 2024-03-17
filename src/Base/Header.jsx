import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
  const [menu, setMenu] = useState(false);
  const location = useLocation();

  const start = 50;
  const onScroll = React.useCallback(() => {
    if (window.scrollY > start) {
      document.getElementById("header").classList.add("sticky");
    } else {
      document.getElementById("header").classList.remove("sticky");
    }
  }, []);

  const close = (e) => {
    if (e.target === e.currentTarget) setMenu(false);
  };

  useEffect(() => {
    if (menu) {
      document.body.classList.add("active");
    } else {
      document.body.classList.remove("active");
    }
  }, [menu]);

  useEffect(() => {
    setMenu(false);
    document.body.classList.remove("active");
  }, [location]);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return (
    <div className="header" id="header">
      <div className="auto__container">
        <div className="header__inner">
          <Link to="/" className="header__inner-logo">
            <img
              src={process.env.PUBLIC_URL + "/images/cookie.svg"}
              alt="icon"
            />
          </Link>
          <nav className={"nav " + (menu ? "active" : "")} onClick={close}>
            <div className="nav__inner">
              <Link to="https://cryptocookies.gitbook.io/documentation/" target="_blank" className="nav__inner-link">
                Documentation
              </Link>
              <button type="button" className="nav__inner-link soon">
                Whitepaper
                <span>Coming Soon</span>
              </button>
              <button type="button" className="nav__inner-link soon">
                Seed Round
                <span>Coming Soon</span>
              </button>
            </div>
          </nav>
          <button
            type="button"
            className={"burger " + (menu ? "active" : "")}
            onClick={() => setMenu(!menu)}
          >
            <span></span>
          </button>
          <button 
            type="button"
            className="button orange"
            onClick={/*() => window.open('https://app.cryptocookies.wtf', '_blank')*/}
          >
            Launch Beta!
          </button>
        </div>
      </div>
    </div>
  );
}
