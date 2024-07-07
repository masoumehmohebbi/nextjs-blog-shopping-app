import React from "react";
import toPersianDigits from "@/utils/toPersianDigits";
import { BookmarkIcon, HeartIcon } from "@heroicons/react/24/outline";
import {
  HeartIcon as SolidHearIcon,
  BookmarkIcon as SolideBookmarkIcon,
} from "@heroicons/react/16/solid";

import { HiOutlineAnnotation } from "react-icons/hi";
import http from "@/services/httpService";
import routerPush from "@/utils/routerPush";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

const PostInteraction = ({ post, isSmall }) => {
  const iconSize = isSmall ? "w-4 h-4" : "w-6 h-6";
  const numberSize = isSmall ? "text-xs" : "text-base";

  const router = useRouter();

  const likeHandler = (postId) => {
    http
      .put(`/posts/like/${postId}`)
      .then(({ data }) => {
        routerPush(router);
        toast.success(data.message);
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message);
      });
  };

  const bookmarkHandler = (postId) => {
    http
      .put(`/posts/bookmark/${postId}`)
      .then(({ data }) => {
        toast.success(data.message);
        routerPush(router);
      })
      .catch((err) => {
        toast.error(err?.response?.data?.message);
      });
  };

  return (
    <div className="flex items-center gap-2">
      <div className="cursor-pointer transition-all duration-200 text-gray-600 bg-gray-100 hover:text-gray-100 hover:bg-gray-600 flex items-center gap-x-1 rounded-md p-0.5">
        <HiOutlineAnnotation className={`${iconSize} stroke-current`} />
        <span className={`${numberSize}`}>
          {toPersianDigits(post.commentsCount)}
        </span>
      </div>
      <button
        onClick={() => likeHandler(post._id)}
        className="cursor-pointer transition-all duration-200 text-red-600 bg-red-100 hover:text-red-100 hover:bg-red-600 flex items-center gap-x-1 rounded-md p-0.5"
      >
        {post.isLiked ? (
          <SolidHearIcon className={`${iconSize} fill-current`} />
        ) : (
          <HeartIcon className={`${iconSize} stroke-cfill-current`} />
        )}
        <span className={`${numberSize}`}>
          {toPersianDigits(post.likesCount)}
        </span>
      </button>
      <button
        onClick={() => bookmarkHandler(post._id)}
        className="bg-blue-100 text-blue-500 p-0.5 rounded flex items-center gap-x-1
      hover:bg-blue-500 hover:text-white transition-all"
      >
        {post.isBookmarked ? (
          <SolideBookmarkIcon className={`${iconSize} fill-current`} />
        ) : (
          <BookmarkIcon className={`${iconSize} stroke-current`} />
        )}
      </button>
    </div>
  );
};

export default PostInteraction;
