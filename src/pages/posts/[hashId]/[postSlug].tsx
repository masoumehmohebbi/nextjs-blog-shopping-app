import axios from "axios";
import Link from "next/link";
import React from "react";
import { toPersianDigits } from "@/utils/toPersianDigits";
import { BookmarkIcon, LinkIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon as SolideBookmarkIcon } from "@heroicons/react/16/solid";

const PostPage = ({ post }) => {
  return (
    <div className="bg-gray-50 h-screen">
      <header className="flex flex-col md:flex-row gap-y-5 md:justify-between md:items-center mb-12 max-w-screen-md mx-auto">
        {/* author data */}
        <div className="flex items-stretch">
          <img
            className="w-14 h-14 md:w-20 md:h-20 rounded-full ring-2 ring-white"
            src="/images/vuejs.png"
            alt={post.author.name}
          />
          <div className="flex flex-col mr-4 justify-between">
            <div>
              <span className="font-extrabold text-base">
                {post.author.name}
              </span>
              <Link
                href={`/blogs/${post.category.englishTitle}`}
                className="bg-white border border-blue-500 text-xs text-blue-500 px-3 py-1 mr-2 rounded-full transition-all duration-300 hover:bg-blue-500 hover:text-white"
              >
                {post.category.title}
              </Link>
            </div>
            <span className="font-normal text-xs hidden md:block">
              {post.author.biography}
            </span>

            <div className="font-normal text-myGray-400 text-sm ">
              <span>{new Date(post.createdAt).toLocaleDateString("fa")}</span>
              <span className="mx-1"> &bull;</span>
              <span>
                <span> خواندن</span>
                <span> {toPersianDigits(post.readingTime)} </span>
                <span>دقیقه </span>
              </span>
            </div>
          </div>
        </div>
        {/* interactions buttons */}
        <div className="flex">
          <button>
            <LinkIcon className="h-6 w-6 hover:text-black text-gray-500 cursor-pointer " />
          </button>
          <button className="mr-4 border border-gray-300 text-gray-500 hover:text-gray-600 rounded-full px-3 py-1 flex items-center">
            <span className="ml-1 text-xs ">
              {post.isBookmarked ? "ذخیره شده" : "ذخیره"}
            </span>
            {post.isBookmarked ? (
              <SolideBookmarkIcon className="h-6 w-6 fill-current" />
            ) : (
              <BookmarkIcon className="h-6 w-6 stroke-current" />
            )}
          </button>
        </div>
      </header>
    </div>
  );
};

export default PostPage;

export async function getServerSideProps(ctx) {
  const { query } = ctx;
  const {
    data: { data },
  } = await axios.get(`http://localhost:5000/api/posts/${query.postSlug}`);
  return {
    props: { post: data },
  };
}
