import PaginationComponent from "@/common/Pagination";
import DesktopCategory from "@/components/posts/DesktopCategory";
import PostList from "@/components/posts/PostList";
import SortBar from "@/components/posts/SortBar";
import http from "@/services/httpService";
import { GetServerSidePropsContext } from "next";
import queryString from "query-string";
import React from "react";
import Layout from "src/containers/layout";
import { Blog } from "src/types/blogData";

interface PostCategory {
  _id: string;
  name: string;
}

interface BlogsData {
  docs: Blog[];
  page: number;
  totalPages: number;
}

interface BlogPageProps {
  postCategories: PostCategory[];
  blogsData: BlogsData;
}
const BlogPage = ({ postCategories, blogsData }: BlogPageProps) => {
  return (
    <Layout>
      <div className="lg:max-w-screen-xl container mx-auto px-4 md:px-0">
        <h1 className="mb-9 text-xl md:text-2xl font-black">
          مقالات برنامه نویسی
        </h1>
        <div className="grid md:grid-cols-12 md:grid-rows-[60px_minmax(300px,_1fr)] gap-8 min-h-screen">
          {/* Category */}
          <div className="hidden md:block row-span-2 col-span-3">
            <DesktopCategory postCategories={postCategories} />
          </div>
          {/* sort */}
          <div className="hidden md:block md:col-span-9">
            <SortBar />
          </div>
          {/* Blogs */}
          <div className="md:col-span-9 grid grid-cols-6 gap-8">
            <PostList blogsData={blogsData.docs} />

            <PaginationComponent
              page={blogsData.page}
              count={blogsData.totalPages}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const { req, query } = ctx;

  const { data: postCategories } = await http.get("/post-category");

  const { data: blogsData } = await http.get(
    `/posts?${queryString.stringify(query)}`,
    {
      headers: {
        Cookie: req.headers.cookie || "",
      },
    }
  );

  return {
    props: {
      postCategories: postCategories.data,
      blogsData: blogsData.data,
    },
  };
}
