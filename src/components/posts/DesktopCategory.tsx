import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useState } from "react";

const DesktopCategory = ({ postCategories }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white rounded-3xl overflow-hidden">
      {/* accordion header */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between bg-purple-200 p-4 cursor-pointer "
      >
        <span>دسته بندی مقالات</span>
        <ChevronDownIcon
          className={`w-6 h-6 transition-all duration-200 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>
      {/* accordion content */}
      <div className={`${isOpen ? "block" : "hidden"}`}>
        <Link className="py-2 pr-4 block hover:bg-purple-50" href="/blogs">
          همه مقالات
        </Link>
        {postCategories.map((category) => (
          <Link
            key={category._id}
            className="py-2 pr-4 block hover:bg-purple-50"
            href={`/blogs/${category.englishTitle}`}
          >
            {category.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DesktopCategory;
