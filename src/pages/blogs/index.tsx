import DesktopCategory from "@/components/DesktopCategory";
import React from "react";
import Layout from "src/containers/layout";

const BlogPage = () => {
  return (
    <Layout>
      <div className="xl:max-w-screen-xl container mx-auto">
        <h1 className="mb-5 text-2xl font-black">مقالات آموزش برنامه نویسی</h1>
        <div className="grid grid-cols-12 gap-x-5">
          <DesktopCategory />
          {/* sort */}
          <div className="col-span-9">content</div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPage;
