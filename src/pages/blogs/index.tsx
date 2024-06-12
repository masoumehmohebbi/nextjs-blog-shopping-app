import { Inter } from "next/font/google";
import {
  AdjustmentsHorizontalIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import Link from "next/link";
import PostList from "@/components/post/PostList";
import axios from "axios";
import MobileCategory from "@/components/post/MobileCategory";
import SortBar from "@/components/post/SortBar";
import DesktopCategory from "@/components/post/DesktopCategory";
const inter = Inter({ subsets: ["latin"] });

export default function BlogPage({ blogsData, postCategories }) {
  return (
    <div className="bg-gray-100">
      <div className="container mx-auto lg:max-w-screen-xl px-4 md:px-0">
        <MobileCategory postCategories={postCategories} />

        <div className="grid md:grid-cols-12 md:grid-rows-[60px_minmax(300px,_1fr)] min-h-screen gap-8">
          {/* category desktop */}
          <div className="hidden md:block md:row-span-2 md:col-span-3">
            <DesktopCategory postCategories={postCategories} />
          </div>

          <div className="hidden md:block md:col-span-9">
            <SortBar />
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
