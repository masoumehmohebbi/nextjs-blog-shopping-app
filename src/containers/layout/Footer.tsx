import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-3 shadow-xl">
      <div className="flex justify-center gap-x-2">
        <span>ساخته شده توسط</span>
        <Link href="/">م.م</Link>
      </div>
    </footer>
  );
};

export default Footer;
