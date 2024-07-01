import DesktopCategory from "@/components/posts/DesktopCategory";
import PostList from "@/components/posts/PostList";
import SortBar from "@/components/posts/SortBar";
import Layout from "@/containers/layout";
import axios from "axios";
import queryString from "query-string";
import React from "react";

const CategorySlug = ({ postCategories, blogsData }) => {
  return (
    <Layout>
      <div className="xl:max-w-screen-xl container mx-auto">
        <h1 className="mb-9 text-2xl font-black">مقالات برنامه نویسی</h1>
        <div className="grid grid-cols-12  grid-rows-[60px_minmax(300px,_1fr)] gap-8 min-h-screen">
          {/* Category */}
          <div className="hidden md:block row-span-2 col-span-3">
            <DesktopCategory postCategories={postCategories} />
          </div>
          {/* sort */}
          <div className="hidden md:block md:col-span-9">
            <SortBar />
          </div>
          {/* blog */}
          <div className="md:col-span-9 grid grid-cols-6 gap-8">
            <PostList blogsData={blogsData.docs} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CategorySlug;

export async function getServerSideProps(ctx) {
  const { req, query } = ctx;

  const { data: postCategories } = await axios.get(
    "http://localhost:5000/api/post-category"
  );
  const { data: result } = await axios.get(
    `http://localhost:5000/api/posts?${queryString.stringify(query)}`
  );

  return {
    props: {
      postCategories: postCategories.data,
      blogsData: result.data,
    },
  };
}
