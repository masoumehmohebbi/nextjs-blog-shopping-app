import React from "react";
import toPersianDigits from "@/utils/toPersianDigits";
import { BookmarkIcon, HeartIcon } from "@heroicons/react/24/outline";
import { HiOutlineAnnotation } from "react-icons/hi";

const PostInteraction = ({ post, isSmall }) => {
  const iconSize = isSmall ? "w-4 h-4" : "w-6 h-6";
  const numberSize = isSmall ? "text-xs" : "text-base";
  return (
    <div className="flex items-center gap-2">
      <div className="cursor-pointer transition-all duration-200 text-gray-600 bg-gray-100 hover:text-gray-100 hover:bg-gray-600 flex items-center gap-x-1 rounded-md p-0.5">
        <HiOutlineAnnotation className={`${iconSize} stroke-current`} />
        <span className={`${numberSize}`}>
          {toPersianDigits(post.commentsCount)}
        </span>
      </div>
      <div className="cursor-pointer transition-all duration-200 text-red-600 bg-red-100 hover:text-red-100 hover:bg-red-600 flex items-center gap-x-1 rounded-md p-0.5">
        <HeartIcon className={`${iconSize} stroke-current`} />
        <span className={`${numberSize}`}>
          {toPersianDigits(post.likesCount)}
        </span>
      </div>
      <div className="cursor-pointer transition-all duration-200 text-blue-600 bg-blue-100 hover:text-blue-100 hover:bg-blue-600 flex items-center gap-x-1 rounded-md p-0.5">
        <BookmarkIcon className={`${iconSize} stroke-current`} />
      </div>
    </div>
  );
};

export default PostInteraction;
