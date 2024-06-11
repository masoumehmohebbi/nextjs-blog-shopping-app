import { Inter } from "next/font/google";
import {
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import Link from "next/link";
import PostList from "@/components/post/PostList";
import axios from "axios";
const inter = Inter({ subsets: ["latin"] });

export default function Home({ blogsData, postCategories }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto lg:max-w-screen-xl px-4 md:px-0">
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
          </div>
          {/* category mobile */}
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
            <PostList blogsData={blogsData} />
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { data: result } = await axios.get(
    "http://localhost:5000/api/posts?limit=6&page=1"
  );
  const { data: postCategories } = await axios.get(
    "http://localhost:5000/api/post-category"
  );
  const { data } = result;

  return {
    props: {
      blogsData: data,
      postCategories: postCategories.data,
    },
  };
}
