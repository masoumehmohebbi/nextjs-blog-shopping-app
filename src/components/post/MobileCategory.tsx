import Link from "next/link";
import React from "react";

const MobileCategory = ({ postCategories }) => {
  return (
    <div className="flex md:hidden overflow-auto gap-x-4 pb-5">
      {postCategories.map((category) => (
        <Link
          key={category._id}
          className="py-1 px-3 block bg-white rounded-3xl text-sm whitespace-nowrap border-gray-500 text-gray-500"
          href={`/blogs/${category.englishTitle}`}
        >
          {category.title}
        </Link>
      ))}
    </div>
  );
};

export default MobileCategory;
