import PostInteraction from "@/pages/posts/PostInteraction";
import {
  BookmarkIcon,
  ChatBubbleBottomCenterTextIcon,
  ClockIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function PostList({ blogsData }) {
  return blogsData.docs.map((blog, index) => (
    <div
      key={index}
      className="col-span-6 md:col-span-3 lg:col-span-2 bg-white rounded-3xl p-2 flex flex-col max-h-[350px]"
    >
      {/* blog cover */}
      <div className="aspect-w-16 aspect-h-9 mb-6">
        <Link href={`/posts/${blog.hashId}/${blog.slug}`}>
          <img
            src={blog.coverImage}
            alt=""
            className="w-full h-full object-center object-cover rounded-2xl"
          />
        </Link>
      </div>
      {/* blog content */}
      <div className="bg-gray-50 rounded-xl p-2 flex flex-col w-full justify-between flex-1">
        <Link href={`/posts/${blog.hashId}/${blog.slug}`}>
          <h2 className="mb-4 font-bold">{blog.title}</h2>
        </Link>
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
            <Link href={`/blogs/${blog.category.englishTitle}`}>
              <span className="text-xs rounded-xl py-1 px-2 cursor-pointer text-blue-600 bg-blue-100 hover:bg-blue-600 hover:text-blue-100 transition-all duration-300">
                {blog.category.englishTitle}
              </span>
            </Link>
          </div>

          {/* blog interaction */}
          <PostInteraction post={blog} isSmall />
        </div>
      </div>
    </div>
  ));
}
