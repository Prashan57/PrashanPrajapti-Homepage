import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export function VelocityText() {
  return (
    <VelocityScroll
      text="Full Stack Developer - Bachelors in Computer Science and Information
        Technology - MERN STACK DEVELOPER"
      default_velocity={0.7}
      className="font-display text-center text-4xl font-bold tracking-[-0.02em] text-black drop-shadow-sm dark:text-white md:text-4xl md:leading-[5rem]"
    />
  );
}
