"use client";

import Meteors from "@/components/magicui/meteors";
import {
  FacebookIcon,
  Linkedin,
  InstagramIcon,
  GithubIcon,
} from "lucide-react";

export function MeteorEffectCard() {
  return (
    <div className="relative flex h-[300px] w-full flex-col items-center justify-center overflow-hidden bg-background md:shadow-xl">
      <Meteors number={40} />
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10 lg:my-10 my-5">
        Contact Me
      </span>
      <div className="flex flex-row items-center justify-between gap-4">
        <div className="flex flex-row justify-evenly ">
          <button
            className="flex flex-row"
            onClick={(e) => {
              e.preventDefault();
              window.location.href =
                "https://www.facebook.com/prashan.prajapati.057";
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
              window.location.href =
                "https://www.linkedin.com/in/prashan-prajapati-b3a87a18b/";
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
              window.location.href = "https://github.com/Prashan57";
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
              window.location.href =
                "https://www.instagram.com/prashanprajapat/";
            }}
          >
            <InstagramIcon />
            Instagram
          </button>
        </div>
      </div>
    </div>
  );
}
