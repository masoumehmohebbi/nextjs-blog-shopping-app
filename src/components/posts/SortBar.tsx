import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import React from "react";

const SortBar = () => {
  return (
    <div className="bg-white rounded-3xl px-4 flex items-center">
      <div className="flex gap-x-2 ml-4 items-center">
        <AdjustmentsHorizontalIcon className="w-6 h-6" />
        <span>مرتب سازی:</span>
      </div>
      <ul className="flex items-center gap-x-4">
        <li className="cursor-pointer py-4">پر بازدید ترین</li>
        <li className="cursor-pointer py-4">محبوب ترین</li>
        <li className="cursor-pointer py-4">جدید ترین</li>
      </ul>
    </div>
  );
};

export default SortBar;
