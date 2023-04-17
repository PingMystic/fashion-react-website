import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="info-bar">
          <div className="box">
            <h3>ABOUT DUROTAN</h3>
            <p>
              The inspiration got from natural, color pastel and activities the
              daily.
            </p>
          </div>
          <div className="box">
            <h3>OUR SOCIALS</h3>
            <div className="icons">
              <AiOutlineTwitter />
              <AiOutlineInstagram />
              <AiOutlineGithub />
            </div>
          </div>
          <div className="box">
            <h3>NEWSLETTER</h3>
            <div className="input">
              <input type="text" placeholder="Email Address" />
              <button>SUBSCRIBE</button>
            </div>
          </div>
        </div>
        <div className="nav-list">
          <ul>
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">SHOP</a>
            </li>
            <li>
              <a href="#">PRODUCT</a>
            </li>
            <li>
              <a href="#">BLOG</a>
            </li>
            <li>
              <a href="#">PAGES</a>
            </li>
          </ul>
          <p>
            © 2023 <span>ping.</span> all rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}
