"use client";
import React from "react";
import {
  PhoneIcon,
  FacebookIcon,
  Linkedin,
  InstagramIcon,
  GithubIcon,
} from "lucide-react";
const SocialButton = ({ label, url }) => {
  <div className="flex flex-row w-fit ">
    <div className="flex flex-row">
      <button
        className="flex flex-row"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "https://www.google.com/";
        }}
      >
        <FacebookIcon />
        Facebook
      </button>
    </div>
    <div className="flex flex-row">
      <button
        className="flex flex-row"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "https://www.google.com/";
        }}
      >
        <Linkedin />
        LinkedIn
      </button>
    </div>
    <div className="flex flex-row">
      <button
        className="flex flex-row"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "https://www.google.com/";
        }}
      >
        <GithubIcon />
        GitHub
      </button>
    </div>
    <div className="flex flex-row">
      <button
        className="flex flex-row"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "https://www.google.com/";
        }}
      >
        <InstagramIcon />
        Instagram
      </button>
    </div>
  </div>;
};

export default SocialButton;
