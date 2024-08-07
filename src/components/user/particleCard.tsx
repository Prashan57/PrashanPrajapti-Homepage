/* eslint-disable react/no-unescaped-entities */
import Particles from "@/components/magicui/particles";
import { VelocityText } from "./velocityText";

export const ParticleCard = () => {
  return (
    <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden  border bg-background md:shadow-xl border-none">
      <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center text-7xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
        About Me
      </span>
      <span className="lg:mx-72 md:mx-44 sm:mx-20 lg:mt-10 md:mt-7 sm:mt-4 text-center">
        I am a proficient developer with expertise in the MERN stack (MongoDB,
        Express.js, React, Node.js) and React Native, allowing me to build both
        web and mobile applications. My skills encompass front-end development
        with modern frameworks like React and Next.js, as well as back-end
        development using Node.js and Express.js. With a strong foundation in
        mobile app development through React Native, I have created dynamic and
        responsive applications that provide seamless user experiences across
        platforms. Holding a Bachelor's degree in Computer Science and
        Technology, I am continually expanding my knowledge and staying updated
        with the latest industry trends and technologies.
      </span>
      <Particles
        className="absolute inset-0"
        quantity={100}
        ease={80}
        color="#ffffff"
        refresh
      />
    </div>
  );
};
