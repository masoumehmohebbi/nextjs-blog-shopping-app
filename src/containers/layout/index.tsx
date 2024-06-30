import React from "react";
import { ChildrenProp } from "src/types/common";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }: ChildrenProp) => {
  return (
    <div className="bg-[#f4f5f7] text-slate-800 flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
