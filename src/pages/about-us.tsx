import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-[#f4f5f7]  text-slate-800 min-h-screen py-11">
      <div className="md:max-w-screen-md container mx-auto shadow-sm p-2 rounded-md bg-white border">
        <div className="flex items-center mb-9">
          <Link
            href="/"
            className="flex items-center transition-all duration-300 gap-x-1 bg-violet-600 text-white hover:bg-violet-200 hover:text-violet-800 rounded-lg p-1"
          >
            <ArrowLongRightIcon className="w-6 h-6" />
            <span>برگشت</span>
          </Link>
        </div>
        <p>
          پروژه فروشگاهی-بلاگی هست که با نکست و تایپ اسکریپت توسعه داده شده.
        </p>
        <span>...</span>
      </div>
    </div>
  );
};

export default AboutUs;
