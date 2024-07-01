import React, { useState } from "react";
import {
  ChevronDownIcon,
  RectangleGroupIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const DesktopCategory = ({ postCategories }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* accordion */}
      <div className="rounded-3xl overflow-hidden shadow-md sticky top-24">
        {/* accordion header */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="px-3 py-4 bg-white flex justify-between items-center cursor-pointer"
        >
          <div className="flex items-center gap-x-2">
            <RectangleGroupIcon className="w-6 h-6" />
            <span>دسته بندی مقالات</span>
          </div>
          <span
            className={`transition-all duration-200 w-6 h-6 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            <ChevronDownIcon />
          </span>
        </div>

        {/* accordion body */}
        <div className={`bg-white ${isOpen ? "block" : "hidden"}`}>
          <div className="w-11/12 h-[2px] mx-auto bg-[#f4f5f7] mb-2"></div>
          <Link
            className="py-2 block px-3 cursor-pointer hover:bg-violet-50"
            href={`/blogs`}
          >
            همه مقالات
          </Link>
          {postCategories.map((category) => (
            <Link
              key={category._id}
              className="py-2 block px-3 cursor-pointer hover:bg-violet-50"
              href={`/blogs/${category.englishTitle}`}
            >
              {category.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default DesktopCategory;
