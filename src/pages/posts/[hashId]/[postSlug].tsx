import DesktopCategory from "@/components/posts/DesktopCategory";
import SortBar from "@/components/posts/SortBar";
import Layout from "@/containers/layout";
import useMoveBack from "@/hooks/useMoveBack";
import toLocalDate from "@/utils/toLocalDate";
import toPersianDigits from "@/utils/toPersianDigits";
import {
  ArrowLongRightIcon,
  BookmarkIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";
import axios from "axios";
import Link from "next/link";
import React from "react";

const PostDetails = ({ post }) => {
  const moveBack = useMoveBack();
  console.log(post);

  return (
    <Layout>
      <div className="md:max-w-screen-md container mx-auto">
        <div className="flex items-center mb-9">
          <button
            onClick={moveBack}
            className="flex items-center transition-all duration-300 gap-x-1 bg-violet-500 text-white hover:bg-violet-200 hover:text-violet-800 rounded-lg py-1 px-1.5"
          >
            <ArrowLongRightIcon className="w-6 h-6" />
            <span>برگشت</span>
          </button>
        </div>
        <header className="flex items-center justify-between mb-12">
          {/* author data */}
          <div className="flex items-stretch gap-x-2">
            <img
              className="w-14 md:w-20 h-14 md:h-20 rounded-full ring ring-violet-300 shadow-sm"
              src="/images/author.png"
              alt={post.author.name}
            />

            <div className="flex flex-col mr-4 justify-between">
              <div className="flex gap-x-1">
                <span>{post.author.name}</span>
                <Link
                  href={`/`}
                  className="rounded-xl transition-all duration-200 bg-violet-200 text-violet-600 hover:text-violet-100 hover:bg-violet-600 px-2 text-sm py-0.5"
                >
                  {post.category.englishTitle}
                </Link>
              </div>
              <span>{post.author.biography}</span>

              <div className="flex items-center gap-x-1">
                <span>{toLocalDate(post.createdAt)}</span>
                <span className="mx-1">&bull;</span>
                <div>
                  <span>خواندن</span>
                  <span> {toPersianDigits(post.readingTime)} </span>
                  <span>دقیقه</span>
                </div>
              </div>
            </div>
          </div>
          {/* interactions buttons */}
          <div className="flex gap-x-7">
            <button>
              <LinkIcon className="h-6 w-6 hover:text-slate-800 text-gray-500 cursor-pointer " />
            </button>
            <button className="rounded-2xl items-center flex gap-x-1 transition-all duration-200 bg-gray-200 text-gray-600 hover:text-gray-100 hover:bg-gray-600 px-2 py-1 text-sm">
              <span>ذخیره</span>
              <BookmarkIcon className="w-6 h-6" />
            </button>
          </div>
        </header>
        <main>
          <h1>{post.title}</h1>
        </main>
      </div>
    </Layout>
  );
};

export default PostDetails;

export async function getServerSideProps(ctx) {
  const { query, req } = ctx;
  const { postSlug } = query;
  const {
    data: { data },
  } = await axios.get(`http://localhost:5000/api/posts/${postSlug}`);

  return {
    props: {
      post: data,
    },
  };
}
