import Layout from "@/containers/layout";
import useMoveBack from "@/hooks/useMoveBack";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import React from "react";

const AboutUs = () => {
  const moveBack = useMoveBack();
  return (
    <Layout>
      <div className="md:max-w-screen-md container mx-auto shadow-sm p-2 rounded-md bg-white border">
        <div className="flex items-center mb-9">
          <button
            onClick={moveBack}
            className="flex items-center transition-all duration-300 gap-x-1 bg-violet-500 text-white hover:bg-violet-200 hover:text-violet-800 rounded-lg py-1 px-1.5"
          >
            <ArrowLongRightIcon className="w-6 h-6" />
            <span>برگشت</span>
          </button>
        </div>
        <p className="mb-4">
          پروژه فروشگاهی-بلاگی هست که با تکنولوژی های زیر توسعه داده شده است:
        </p>
        <img
          className="w-full rounded-md"
          src="/images/MindMap-Blog-Shopping-App.PNG"
          alt="MindMap-Blog-Shopping-App"
        />
      </div>
    </Layout>
  );
};

export default AboutUs;
