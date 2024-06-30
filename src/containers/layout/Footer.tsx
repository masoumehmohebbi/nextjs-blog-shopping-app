import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-3 shadow-xl">
      <div className="flex justify-center items-center gap-x-2">
        <span>ساخته شده توسط</span>
        <Link
          href="https://github.com/masoumehmohebbi"
          className="bg-violet-200 py-0.5 px-2 hover:bg-violet-300 rounded-xl"
        >
          م.م
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
