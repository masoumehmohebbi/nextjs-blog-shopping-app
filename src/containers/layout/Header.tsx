import Link from "next/link";
import React from "react";
import { RiHome4Line, RiInformation2Line, RiNextjsFill } from "react-icons/ri";
import { RiBloggerLine } from "react-icons/ri";

const navItems = [
  {
    icon: (
      <RiHome4Line className="w-5 h-5 text-slate-700 group-hover:text-violet-600" />
    ),
    label: "خانه",
  },
  {
    icon: (
      <RiBloggerLine className="w-5 h-5 text-slate-700 group-hover:text-violet-600" />
    ),
    label: "بلاگ ها",
  },
  {
    icon: (
      <RiInformation2Line className="w-5 h-5 text-slate-700 group-hover:text-violet-600" />
    ),
    label: "درباره ما",
  },
];
const Header = () => {
  return (
    <header className="mb-7 bg-[#f4f5f7] z-10 text-slate-800 sticky top-0">
      <div className="container mx-auto xl:max-w-screen-xl flex items-center justify-between py-4">
        <div className="flex gap-x-9 items-center">
          <Link href="/" className="flex items-center gap-x-1 text-violet-500">
            <RiNextjsFill className="w-10 h-10" />
            <span className="font-black text-lg">بلاگـ شاپـ</span>
          </Link>

          {navItems.map((item, index) => (
            <div
              key={index}
              className="flex items-center cursor-pointer gap-x-1 group hover:text-violet-600"
            >
              {item.icon}
              <Link href="/blogs">{item.label}</Link>
            </div>
          ))}
        </div>

        <div className="flex gap-x-5 items-center">
          <Link href="/">ثبت نام</Link>
          <Link
            className="bg-violet-500 hover:bg-violet-400 transition-all duration-200 text-violet-100 px-5 py-2 rounded-lg"
            href="/"
          >
            ورود
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;