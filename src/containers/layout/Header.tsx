import Link from "next/link";
import React from "react";
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
  return (
    <header className="mb-7 bg-[#f4f5f7] z-10 text-slate-800 sticky top-0">
      <div className="container mx-auto xl:max-w-screen-xl flex items-center justify-between py-4">
        <div className="flex gap-x-9 items-center">
          <Link href="/" className="flex items-center gap-x-1 text-violet-700">
            <RiNextjsFill className="w-10 h-10" />
            <span className="font-black text-lg">بلاگـ شاپـ</span>
          </Link>

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
        </div>

        <div className="flex gap-x-5 items-center">
          <Link href="/signup">ثبت نام</Link>
          <Link
            className="bg-violet-700 hover:bg-violet-500 transition-all duration-200 text-violet-100 px-5 py-2 rounded-lg"
            href="/signin"
          >
            ورود
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
