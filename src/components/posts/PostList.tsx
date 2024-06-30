import Link from "next/link";
import React from "react";
import PostInteraction from "./PostInteraction";

const PostList = ({ blogsData }) => {
  return blogsData.map((blog) => (
    <div
      key={blog._id}
      className="col-span-6 md:col-span-3 lg:col-span-2 flex flex-col p-2 max-h-[350px] shadow-lg rounded-xl overflow-hidden"
    >
      {/* blog cover */}
      <div className="aspect-w-16 aspect-h-9 mb-6">
        <img
          className="w-full h-full object-center rounded-xl object-cover"
          src={blog.coverImage}
          alt={blog.title}
        />
      </div>
      {/* blog content */}
      <div className="flex-1 justify-between flex bg-violet-100 rounded-xl p-1 flex-col">
        <h2>{blog.title}</h2>
        {/* blog data */}
        <div className="flex flex-col gap-5">
          <div className="flex justify-between items-center">
            {/* blog-author category */}
            <div className="flex items-center gap-x-2">
              <img
                className="w-6 h-6 ring-2 ring-violet-200 rounded-full"
                src="/images/tailwindcss.png"
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
          <PostInteraction blog={blog} />
        </div>
      </div>
    </div>
  ));
};

export default PostList;
