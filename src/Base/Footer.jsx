import React from "react";
import {
  discordIcon,
  githubIcon,
  linkedIcon,
  telegramIcon,
  twitterIcon,
} from "./SVG";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="auto__container">
        <div className="footer__inner">
          <div className="footer__inner-content">
            <div className="footer__inner-logo">
              <img
                src={process.env.PUBLIC_URL + "/images/logo.png"}
                alt="logo"
              />
            </div>
            <div className="footer__inner-text">
              <p className="xsm">a product developed by</p>{" "}
              <img
                src={process.env.PUBLIC_URL + "/images/chainlab.svg"}
                alt="chainlab"
              />
            </div>
            <div className="footer__inner-text">
              <p className="xsm">© 2023 Chainlabs Switzerland SA</p>
            </div>
          </div>
          <div className="footer__inner-nav">
            <Link to="">Documentation</Link>
            <Link to="">Whitepaper</Link>
            <Link to="">Seed Round</Link>
            <Link to="">Disclaimer</Link>
          </div>
          <div className="footer__inner-socials">
            <a href="https://www.facebook.com">{githubIcon}</a>
            <a href="https://www.twitter.com">{twitterIcon}</a>
            <a href="https://www.linkedin.com">{linkedIcon}</a>
            <a href="https://www.discord.com">{discordIcon}</a>
            <a href="https://www.telegram.com">{telegramIcon}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
