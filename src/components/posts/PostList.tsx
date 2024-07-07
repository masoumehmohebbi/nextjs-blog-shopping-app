import Link from "next/link";
import React from "react";
import PostInteraction from "./PostInteraction";
import { ClockIcon } from "@heroicons/react/24/outline";
import toPersianDigits from "@/utils/toPersianDigits";

const PostList = ({ blogsData }) => {
  console.log("---", blogsData);

  return blogsData.map((blog) => (
    <div
      key={blog._id}
      className="col-span-6 md:col-span-3 lg:col-span-2 bg-white rounded-3xl p-2 flex flex-col  max-h-[350px] shadow-lg overflow-hidden"
    >
      {/* blog cover */}
      <div className="aspect-w-16 aspect-h-9 mb-6">
        <Link href={`/posts/${blog.hashId}/${blog.slug}`}>
          <img
            className="w-full h-full object-center rounded-xl object-cover"
            src={blog.coverImage}
            alt={blog.title}
          />
        </Link>
      </div>
      {/* blog content */}
      <div className="flex-1 justify-between flex bg-violet-100 rounded-xl p-1 flex-col">
        <Link href={`/posts/${blog.hashId}/${blog.slug}`}>
          <h2 className="font-bold mb-4 md:mb-0">{blog.title}</h2>
        </Link>
        {/* blog data */}
        <div className="flex flex-col gap-5">
          <div className="flex justify-between items-center">
            {/* blog-author category */}
            <div className="flex items-center gap-x-2">
              <img
                className="w-6 h-6 ring-2 ring-violet-200 rounded-full"
                src="/images/author.png"
                alt="author"
              />
              <span>{blog.author.name}</span>
            </div>
            <Link
              href={`/`}
              className="rounded-xl transition-all duration-200 bg-violet-200 text-violet-600 hover:text-violet-100 hover:bg-violet-600 px-2 text-sm py-0.5"
            >
              {blog.category.englishTitle}
            </Link>
          </div>
          {/* blog interaction */}
          <div className="flex justify-between items-center">
            <PostInteraction isSmall post={blog} />
            <div className="flex text-gray-600 items-center gap-x-1 text-xs">
              <ClockIcon className="w-4 h-4" />
              <span>زمان مطالعه:</span>
              <span>{toPersianDigits(blog.readingTime)}</span>
              <span>دقیقه</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  ));
};

export default PostList;
