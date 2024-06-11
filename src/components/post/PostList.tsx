import {
  BookmarkIcon,
  ChatBubbleBottomCenterTextIcon,
  ClockIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

export default function PostList({ blogsData }) {
  return blogsData.docs.map((blog, index) => (
    <div
      key={index}
      className="col-span-6 md:col-span-3 lg:col-span-2 bg-white rounded-3xl p-2 flex flex-col"
    >
      {/* blog cover */}
      <div className="aspect-w-16 aspect-h-9 mb-6">
        <img
          src={blog.coverImage}
          alt=""
          className="w-full h-full object-center object-cover rounded-2xl"
        />
      </div>
      {/* blog content */}
      <div className="bg-gray-50 rounded-xl p-2 flex flex-col w-full justify-between flex-1">
        <h2 className="mb-4 font-bold">{blog.title}</h2>
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
              {blog.category.englishTitle}
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
  ));
}
