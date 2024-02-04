import { BsInstagram } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { RiDiscordLine } from "react-icons/ri";
import { SlSocialLinkedin } from "react-icons/sl";

export default function HeaderLayout() {
  return (
    <>
      <main className="mx-[15%] flex flex-col md:flex-row xl:flex-row xl:gap-96 justify-between  pt-4">
        <div className="flex justify-center text-4xl text-teal-300">
          <strong className="font-bold">theo </strong> vargas
          <strong className="text-red-600">.</strong>
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
