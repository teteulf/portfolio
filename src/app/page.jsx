import Image from "next/image";
import About from "./about_me/page";
import Projects from "./projects/page";
import Contact from "./talk_to_me/page";

export default function Home() {
  return (
    <>
      <About />
      <Projects />
      <Contact />{" "}
    </>
  );
}
