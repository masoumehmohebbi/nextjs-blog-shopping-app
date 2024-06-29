import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className=" bg-white shadow-md">
      <div className="container mx-auto xl:max-w-screen-xl flex justify-between py-4">
        <div className="flex gap-x-5">
          <Link href="/">خانه</Link>
          <Link href="/blogs">بلاگ ها</Link>
        </div>

        <div className="flex gap-x-5">
          <Link href="/">ثبت نام</Link>
          <Link href="/">ورود</Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
