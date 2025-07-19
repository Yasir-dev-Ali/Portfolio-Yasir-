import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faStackOverflow,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import INFO from "../../pages/Info/info";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t mt-20 py-8 text-center">
      <div className="max-w-4xl mx-auto px-4 flex flex-col items-center space-y-4">
        <div className="flex space-x-6 text-xl text-gray-600">
          <a href={INFO.socials.twitter} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} className="hover:text-blue-500" />
          </a>
          <a href={INFO.socials.github} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} className="hover:text-black" />
          </a>
          <a href={INFO.socials.stackoverflow} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faStackOverflow} className="hover:text-orange-500" />
          </a>
          <a href={INFO.socials.instagram} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="hover:text-pink-500" />
          </a>
          <a href={`mailto:${INFO.main.email}`} target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faEnvelope} className="hover:text-red-500" />
          </a>
        </div>

        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Yasir Ali — All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
