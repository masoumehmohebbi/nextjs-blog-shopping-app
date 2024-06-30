import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const sortOptions = [
  { label: "پر بازدید ترین", id: "most" },
  { label: "محبوب ترین", value: "popular" },
  { label: "جدید ترین", value: "newest" },
];

const SortBar = () => {
  return (
    <div className="bg-white rounded-3xl shadow-md">
      <div className="flex px-3 gap-x-3">
        <div className="flex items-center gap-x-1 py-4">
          <AdjustmentsHorizontalIcon className="w-6 h-6" />
          <span>مرتب سازی:</span>
        </div>
        <ul className="flex gap-x-5 items-center">
          {sortOptions.map(({ label, id }) => (
            <li className="py-4 cursor-pointer" key={id}>
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SortBar;
