import useMoveBack from "@/hooks/useMoveBack";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="bg-[#f4f5f7]  text-slate-800 min-h-screen py-11">
      <div className="md:max-w-screen-md items-center justify-center flex-col flex gap-5 container mx-auto shadow-sm p-4 rounded-md bg-white border">
        <p>صفحه مورد نظر یافت نشد.</p>
        <Link
          href="/"
          className="ransition-all duration-300 bg-violet-500 text-white hover:bg-violet-200 hover:text-violet-800 rounded-lg py-1 px-1.5"
        >
          برگشت به صفحه اصلی
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
