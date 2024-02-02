"use client";
import { HiUser, HiHome, HiEnvelope, HiViewColumns } from "react-icons/hi2";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navData = [
  { name: "Home", path: "/", icon: <HiHome /> },
  { name: "About", path: "/about_me", icon: <HiUser /> },
  { name: "Contact", path: "/talk_to_me", icon: <HiEnvelope /> },
  { name: "Projects", path: "/projects", icon: <HiViewColumns /> },
];

export default function Menu() {
  const pathname = usePathname();
  return (
    <div
      className="
     flex-col fixed 
     p-2 h-46
     right-2 
     text-slate-100
     bg-slate-600 
     bg-opacity-50
     text-xl
     rounded-3xl"
    >
      <nav className="flex xl:flex-col gap-6 ">
        {navData.map((link, index) => {
          return (
            <Link
              href={link.path}
              className={`${
                link.path === pathname && "text-red-600"
              } cursor-pointer hover:text-red-600 transition-all duration-300`}
              key={index}
            >
              <div className="group flex items-center">
                {link.icon}
                <div className=" hidden absolute text-black right-[150%] bg-white rounded-[3px] group-hover:flex">
                  {link.name}
                </div>
                <div
                  className="hidden border-solid border-l-white border-l-8 
                border-y-transparent border-y-[6px] border-r-0 absolute right-[130%] group-hover:flex"
                ></div>
              </div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
