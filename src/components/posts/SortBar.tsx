import routerPush from "@/utils/routerPush";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";

const sortOptions = [
  { label: "پر بازدید ترین", id: "most" },
  { label: "محبوب ترین", id: "popular" },
  { label: "جدید ترین", id: "newest" },
];

const SortBar = () => {
  const router = useRouter();
  const [sort, setSort] = useState(router.query.sort || "newest");

  const sortHandler = (id: string) => {
    setSort(id);
    router.query.sort = id;
    routerPush(router);
  };
  return (
    <div className="bg-white rounded-3xl shadow-md">
      <div className="flex px-3 gap-x-3">
        <div className="flex items-center gap-x-1 py-4">
          <AdjustmentsHorizontalIcon className="w-6 h-6" />
          <span>مرتب سازی:</span>
        </div>
        <ul className="flex gap-x-5 items-center">
          {sortOptions.map(({ label, id }) => (
            <li
              onClick={() => sortHandler(id)}
              className={`py-4 cursor-pointer transition-all duration-200 ${
                sort === id && "text-violet-600 font-bold"
              }`}
              key={id}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SortBar;
