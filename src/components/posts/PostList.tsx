import Link from "next/link";
import React from "react";
import PostInteraction from "./PostInteraction";

const PostList = ({ blogsData }) => {
  return (
    <div className="grid grid-cols-6 gap-5 mb-5">
      {/* blog */}
      {blogsData.map((blog) => (
        <div key={blog._id} className="col-span-6 md:col-span-3 lg:col-span-2 ">
          <div className="flex flex-col p-1 bg-white shadow-lg rounded-xl overflow-hidden">
            {/* blog cover */}
            <div className="aspect-w-16 aspect-h-9">
              <img
                className="w-full h-full object-center rounded-xl object-cover"
                src={blog.coverImage}
                alt={blog.title}
              />
            </div>
            {/* blog content */}
            <div className="flex flex-col gap-3">
              <h2>{blog.title}</h2>
              {/* blog data */}
              <div className="flex justify-between items-center">
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
                  className="rounded-xl bg-violet-200 px-1 text-sm py-0.5"
                >
                  {blog.category.englishTitle}
                </Link>
              </div>
              {/* blog interaction */}
              <PostInteraction blog={blog} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
