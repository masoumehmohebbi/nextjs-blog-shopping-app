import DesktopCategory from "@/components/posts/DesktopCategory";
import PostList from "@/components/posts/PostList";
import SortBar from "@/components/posts/SortBar";
import axios from "axios";
import React from "react";
import Layout from "src/containers/layout";

const BlogPage = ({ postCategories, blogsData }) => {
  console.log(blogsData);

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
          {/* Blogs */}
          <div className="col-span-12 md:col-span-9">
            <PostList blogsData={blogsData} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;

export async function getServerSideProps(ctx) {
  console.log(ctx);

  const { data: postCategories } = await axios.get(
    "http://localhost:5000/api/post-category"
  );

  const { data: blogsData } = await axios.get(
    "http://localhost:5000/api/posts?limit=6"
  );

  return {
    props: {
      postCategories: postCategories.data,
      blogsData: blogsData.data.docs,
    },
  };
}
