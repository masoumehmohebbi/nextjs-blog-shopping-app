import React from "react";

const PostList = ({ blogsData }) => {
  return (
    <div className="grid grid-cols-6 gap-5">
      {/* blog */}
      {blogsData.map((blog) => (
        <div key={blog._id} className="col-span-6 md:col-span-3 lg:col-span-2 ">
          <div className="flexflex-col bg-white shadow-lg rounded-lg overflow-hidden">
            {/* blog cover */}
            <div className="aspect-w-16 aspect-h-9">
              <img
                className="w-full h-full object-center object-cover"
                src={blog.coverImage}
                alt={blog.title}
              />
            </div>
            {/* blog content */}
            <h2>{blog.title}</h2>
            <div className="flex items-center gap-x-2">
              <img
                className="w-6 h-6 ring-2 ring-violet-200 rounded-full"
                src="/images/tailwindcss.png"
                alt="author"
              />
              <span>{blog.author.name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostList;
