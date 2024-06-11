import { Inter } from "next/font/google";
import {
  AdjustmentsHorizontalIcon,
  BookmarkIcon,
  ChatBubbleBottomCenterTextIcon,
  ChevronDownIcon,
  ClockIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto lg:max-w-screen-xl">
        <div className="grid md:grid-cols-12 md:grid-rows-[60px_minmax(300px,_1fr)_100px] min-h-screen gap-8">
          {/* category desktop */}
          <div className="hidden md:block md:row-span-2 md:col-span-3">
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
                <Link className="py-2 pr-4 block hover:bg-purple-50" href="#">
                  همه مقالات
                </Link>
                <Link className="py-2 pr-4 block hover:bg-purple-50" href="#">
                  ریکت
                </Link>
                <Link className="py-2 pr-4 block hover:bg-purple-50" href="#">
                  جاوااسکریپت
                </Link>
              </div>
            </div>
          </div>
          {/* sortbar desktop */}
          <div className="hidden md:block md:col-span-9">
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
          </div>
          {/* blog section */}
          <div className="md:col-span-9 grid grid-cols-6 gap-8">
            {[
              "nextjs.png",
              "vuejs.png",
              "nuxtjs.png",
              "vuejs.png",
              "nuxtjs.png",
              "nextjs.png",
            ].map((item, index) => (
              <div
                key={index}
                className="col-span-6 md:col-span-3 lg:col-span-2 bg-white rounded-3xl p-2 flex flex-col"
              >
                {/* blog cover */}
                <div className="aspect-w-16 aspect-h-9 mb-6">
                  <img
                    src={`/images/${item}`}
                    alt=""
                    className="w-full h-full object-center object-cover rounded-2xl"
                  />
                </div>
                {/* blog content */}
                <div className="bg-gray-50 rounded-xl p-2 flex flex-col w-full justify-between flex-1">
                  <h2 className="mb-4 font-bold">
                    {index !== 2
                      ? "بررسی کامل ریکت و ریداکس"
                      : "یک عنوان تستی که باید بیش از دو خط باشد ..."}
                  </h2>
                  {/* blog data */}
                  <div>
                    {/* blog author-category */}
                    <div className="flex justify-between items-center mb-4">
                      <div className="flex items-center">
                        <img
                          className="rounded-full ring-2 ring-white w-6 h-6 ml-2"
                          src="images/nextjs.png"
                          alt=""
                        />
                        <span className="text-sm">معصومه محبی</span>
                      </div>
                      <span className="text-xs rounded-xl py-1 px-2 cursor-pointer text-blue-600 bg-blue-100 hover:bg-blue-600 hover:text-blue-100 transition-all duration-300">
                        ریکت
                      </span>
                    </div>

                    {/* blog interaction */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-x-2">
                        <button className="bg-gray-200 p-0.5 rounded flex items-center gap-x-1">
                          <ChatBubbleBottomCenterTextIcon className="w-4 h-4 stroke-gray-500" />
                          <span className="text-xs text-gray-500 font-bold leading-3">
                            10
                          </span>
                        </button>
                        <button className="bg-red-100 p-0.5 rounded flex items-center gap-x-1">
                          <HeartIcon className="w-4 h-4 stroke-red-500" />
                          <span className="text-xs text-red-500 font-bold leading-3">
                            5
                          </span>
                        </button>
                        <button className="bg-blue-100 p-0.5 rounded flex items-center gap-x-1">
                          <BookmarkIcon className="w-4 h-4 stroke-blue-500" />
                        </button>
                      </div>
                      <div className="flex items-center text-[10px] text-gray-400 font-bold">
                        <ClockIcon className="w-4 h-4 stroke-gray-400 ml-1" />
                        <span className="ml-1">زمان مطالعه:</span>
                        <span className="ml-1">12 دقیقه</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
