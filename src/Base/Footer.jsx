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
            <Link to="https://cryptocookies.gitbook.io/documentation/" target="_blank">Documentation</Link>
            <Link to="">Whitepaper</Link>
            <Link to="">Seed Round</Link>
            <Link to="https://cryptocookies.gitbook.io/documentation/disclaimer" target="_blank">Disclaimer</Link>
          </div>
          <div className="footer__inner-socials">
            <a href="https://github.com/chainlabs-dlt">{githubIcon}</a>
            <a href="https://twitter.com/Web3Cookies">{twitterIcon}</a>
            <a href="https://discord.gg/tQ3vEcK4">{discordIcon}</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
