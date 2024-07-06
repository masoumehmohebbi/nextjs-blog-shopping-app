import { useAuth, useAuthActions } from "@/context/AuthContext";
import Link from "next/link";
import React, { useState } from "react";
import { BiLogOut, BiMenu, BiX } from "react-icons/bi";
import { RiHome4Line, RiInformation2Line, RiNextjsFill } from "react-icons/ri";
import { RiBloggerLine } from "react-icons/ri";

const navItems = [
  {
    icon: (
      <RiHome4Line className="w-5 h-5 text-slate-700 group-hover:text-violet-700" />
    ),
    label: "خانه",
    href: "/",
  },
  {
    icon: (
      <RiBloggerLine className="w-5 h-5 text-slate-700 group-hover:text-violet-700" />
    ),
    label: "بلاگ ها",
    href: "/blogs",
  },
  {
    icon: (
      <RiInformation2Line className="w-5 h-5 text-slate-700 group-hover:text-violet-700" />
    ),
    label: "درباره ما",
    href: "/about-us",
  },
];
const Header = () => {
  const [open, setOpen] = useState(false);
  const { user } = useAuth();
  const dispatch = useAuthActions();

  return (
    <header className="mb-7 h-20 md:h-auto bg-[#f4f5f7] z-50 text-slate-800 sticky top-0">
      <div className="md:container mx-auto bg-[#f4f5f7] h-full xl:max-w-screen-xl flex items-center justify-between md:py-4">
        <div className="flex gap-x-9 items-center">
          <Link
            href="/"
            className="hidden left-4 top-5 md:flex items-center gap-x-1 text-violet-700"
          >
            <RiNextjsFill className="w-8 md:w-10 h-8 md:h-10" />
            <span className="font-black text-lg">بلاگـ شاپـ</span>
          </Link>

          <div
            className={`absolute h-screen md:h-auto pt-8 md:pt-0 md:static left-0 w-full md:w-auto flex flex-col md:flex-row gap-y-8 md:gap-y-0 -z-20 md:z-auto bg-gray-50 p-5 md:p-0 md:bg-transparent md:gap-x-9 imd:tems-center transition-all duration-500 ease-in ${
              open ? "top-16" : "-top-[490px]"
            }`}
          >
            {navItems.map((item, index) => (
              <Link
                onClick={() => setOpen(!open)}
                href={item.href}
                key={index}
                className="flex transition-all duration-200 items-center cursor-pointer gap-x-1 group hover:text-violet-700"
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-x-2 absolute right-4 top-5 md:hidden">
            <button onClick={() => setOpen(!open)} className="col-span-1">
              {!open ? (
                <BiMenu className="w-9 h-9 text-violet-600" />
              ) : (
                <BiX className="w-9 h-9 text-violet-600" />
              )}
            </button>
            <Link href="/" className="text-violet-700">
              <RiNextjsFill className="w-8 md:w-10 h-8 md:h-10" />
            </Link>
          </div>
        </div>

        <div className="absolute left-4 top-5 md:static flex">
          {user ? (
            <>
              <span className="py-2 block ml-3">
                <span className="text-sm text-slate-800 font-semibold">
                  {user.name}
                </span>
              </span>
              <button
                className="flex text-sm sm:text-base items-center gap-x-1 bg-red-600 hover:bg-red-500 transition-all duration-200 text-red-100 px-3 md:px-5 py-1 md:py-2 rounded-lg"
                onClick={() => dispatch({ type: "SIGNOUT" })}
              >
                <BiLogOut className="w-4 md:w-5 h-4 md:h-5" />
                خروج
              </button>
            </>
          ) : (
            <div className="flex gap-x-5 text-sm sm:text-base items-center">
              <Link href="/signup">ثبت نام</Link>
              <Link
                className="bg-violet-700 hover:bg-violet-500 transition-all duration-200 text-violet-100 px-4 md:px-5 py-2 rounded-lg"
                href="/signin"
              >
                ورود
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
