"use client";

import { MagicCard } from "@/components/magicui/magic-card";
import Image from "next/image";
import Image1 from "../../../public/work/EnvisionNepal.png";
import Image2 from "../../../public/work/EdEarn.png";
import Image3 from "../../../public/work/ChatApp.png";

export default function NormalCard() {
  return (
    <div
      className={
        "flex h-[500px] w-full flex-col gap-4 lg:h-[500px] lg:flex-row lg:my-10 "
      }
    >
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl lg:ml-52"
        gradientColor={"#D9D9D955"}
      >
        <Image
          src={Image1}
          alt="Envision Nepal"
          width={500}
          height={500}
          className="hover:bg-gradient-to-r z-0"
          onClick={(e) => {
            e.preventDefault();
            window.location.href =
              "https://github.com/Prashan57/Envision-Nepal";
          }}
        />
        <button className="z-10">Hellooooo</button>
      </MagicCard>
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl lg:mx-2"
        gradientColor={"#D9D9D955"}
      >
        Work 2
        <Image
          src={Image2}
          alt="EdEarn"
          width={500}
          height={500}
          className="hover:bg-gradient-to-r z-0"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "https://github.com/Prashan57/EdEarn";
          }}
        />
      </MagicCard>
      <MagicCard
        className="cursor-pointer flex-col items-center justify-center shadow-2xl whitespace-nowrap text-4xl lg:mr-52"
        gradientColor={"#D9D9D955"}
      >
        <Image
          src={Image3}
          alt="NodeJSChatApp"
          width={500}
          height={500}
          className="hover:bg-gradient-to-r z-0"
          onClick={(e) => {
            e.preventDefault();
            window.location.href =
              "https://github.com/Prashan57/Nodejs-Chat-App";
          }}
        />
      </MagicCard>
    </div>
  );
}
