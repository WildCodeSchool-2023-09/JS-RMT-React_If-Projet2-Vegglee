import React from "react";
import { SlSocialFacebook, SlSocialGithub } from "react-icons/sl";
import {
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialInstagram,
} from "react-icons/ti";
import "./footer.css";

function Footer() {
  return (
    <footer id="footer" className="socialCtn">
      <div className="social">
        <a
          aria-label="facebook"
          href="https://www.facebook.com/"
          target="_blank"
          rel="noreferrer"
        >
          <SlSocialFacebook className="socialIcon" />
        </a>
        <a
          aria-label="linkedin"
          href="https://www.linkedin.com/"
          target="_blank"
          rel="noreferrer"
        >
          <TiSocialLinkedin className="socialIcon" />
        </a>
        <a
          aria-label="instagram"
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
        >
          <TiSocialInstagram className="socialIcon" />
        </a>
        <a
          aria-label="github"
          href="https://www.github.com/"
          target="_blank"
          rel="noreferrer"
        >
          <SlSocialGithub className="socialIcon" />
        </a>
        <a
          aria-label="twitter"
          href="https://www.twitter.com/"
          target="_blank"
          rel="noreferrer"
        >
          <TiSocialTwitter className="socialIcon" />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
