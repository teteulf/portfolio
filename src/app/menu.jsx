"use client";
import { HiUser, HiHome, HiEnvelope, HiViewColumns } from "react-icons/hi2";
import Link from "next/link";
import { useRouter } from "next/navigation";

const navData = [
  { name: "Home", path: "/", icon: <HiHome /> },
  { name: "About me", path: "/About_Me", icon: <HiUser /> },
  { name: "Talk to me", path: "/Talk_To_Me", icon: <HiEnvelope /> },
  { name: "Projects", path: "/Projects", icon: <HiViewColumns /> },
];

export default function Menu() {
  const router = useRouter();
  const pathname = router.pathname;
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
          console.log("link.path:", link.path);
          console.log("pathname:", pathname);
          console.log("Condition:", link.path === pathname);
          return (
            <Link
              href={link.path}
              className={`${
                link.path === pathname && "text-red-600"
              } cursor-pointer`}
              key={index}
            >
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
