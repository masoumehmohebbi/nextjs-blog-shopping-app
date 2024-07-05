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
      <div className="container mx-auto bg-[#f4f5f7] h-full xl:max-w-screen-xl flex items-center justify-between md:py-4">
        <div className="flex gap-x-9 items-center">
          <Link
            href="/"
            className="absolute left-4 top-5 md:static flex items-center gap-x-1 text-violet-700"
          >
            <RiNextjsFill className="w-8 md:w-10 h-8 md:h-10" />
            <span className="font-black text-lg">بلاگـ شاپـ</span>
          </Link>

          <div
            className={`absolute pt-8 md:pt-0 md:static left-0 w-full flex flex-col md:flex-row gap-y-8 md:gap-y-0 -z-20 bg-gray-50 p-5 md:p-0 md:bg-none transition-all duration-500 ease-in ${
              open ? "top-16" : "-top-[490px]"
            }`}
          >
            {navItems.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className="flex transition-all duration-200 items-center cursor-pointer gap-x-1 group hover:text-violet-700"
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            ))}
            // mobile authentications buttons
            <div className="flex md:hidden">
              {user ? (
                <>
                  <span className="py-2 block ml-3">
                    <span className="text-sm text-slate-800 font-semibold">
                      {user.name}
                    </span>
                  </span>
                  <button
                    className="flex items-center gap-x-1 bg-red-600 hover:bg-red-500 transition-all duration-200 text-red-100 px-5 py-2 rounded-lg"
                    onClick={() => dispatch({ type: "SIGNOUT" })}
                  >
                    <BiLogOut className="w-5 h-5" />
                    خروج
                  </button>
                </>
              ) : (
                <div className="flex flex-col gap-y-5 items-center">
                  <Link href="/signup">ثبت نام</Link>
                  <Link
                    className="bg-violet-700 hover:bg-violet-500 transition-all duration-200 text-violet-100 px-5 py-2 rounded-lg"
                    href="/signin"
                  >
                    ورود
                  </Link>
                </div>
              )}
            </div>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="absolute right-4 top-5 md:hidden col-span-1"
          >
            {!open ? (
              <BiMenu className="w-9 h-9 text-violet-600" />
            ) : (
              <BiX className="w-9 h-9 text-violet-600" />
            )}
          </button>
        </div>

        <div className="hidden md:flex">
          {user ? (
            <>
              <span className="py-2 block ml-3">
                <span className="text-sm text-slate-800 font-semibold">
                  {user.name}
                </span>
              </span>
              <button
                className="flex items-center gap-x-1 bg-red-600 hover:bg-red-500 transition-all duration-200 text-red-100 px-5 py-2 rounded-lg"
                onClick={() => dispatch({ type: "SIGNOUT" })}
              >
                <BiLogOut className="w-5 h-5" />
                خروج
              </button>
            </>
          ) : (
            <div className="flex gap-x-5 items-center">
              <Link href="/signup">ثبت نام</Link>
              <Link
                className="bg-violet-700 hover:bg-violet-500 transition-all duration-200 text-violet-100 px-5 py-2 rounded-lg"
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
