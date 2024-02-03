import { BsInstagram } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { RiDiscordLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";

export default function Header() {
  return (
    <>
      <main className="mx-[15%] flex justify-between gap-96 pt-4">
        <div className="ont-bold text-4xl text-teal-300">
          theo vargas<strong className="text-red-700">.</strong>
        </div>
        <div className="flex justify-center text-teal-300 gap-10 pt-4 text-xl">
          <a>
            <BsInstagram className="cursor-pointer hover:animate-bounce hover:text-red-600" />
          </a>
          <a>
            <FaWhatsapp className="cursor-pointer hover:animate-bounce hover:text-red-600" />
          </a>
          <a>
            <RiDiscordLine className="cursor-pointer hover:animate-bounce hover:text-red-600" />
          </a>
          <a>
            <SlSocialLinkedin className="cursor-pointer hover:animate-bounce hover:text-red-600" />
          </a>
        </div>
      </main>
    </>
  );
}
