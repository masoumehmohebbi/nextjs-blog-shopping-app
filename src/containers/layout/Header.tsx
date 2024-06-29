import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="mb-7">
      <div className="container mx-auto xl:max-w-screen-xl flex items-center justify-between py-4">
        <div className="flex gap-x-5">
          <Link href="/">خانه</Link>
          <Link href="/blogs">بلاگ ها</Link>
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
