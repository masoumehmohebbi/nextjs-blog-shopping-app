import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div>
      HomePage - <Link href="/blogs">blog page</Link>
    </div>
  );
};

export default HomePage;
