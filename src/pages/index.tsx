import Layout from "@/containers/layout";
import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <Layout>
      <div className="container mx-auto sm:max-w-screen-xl">
        HomePage - <Link href="/blogs">blog page</Link>
      </div>
    </Layout>
  );
};

export default HomePage;
