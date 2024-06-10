import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="grid md:grid-cols-12 md:grid-rows-[60px_minmax(300px,_1fr)_100px] min-h-screen gap-8">
      {/* category desktop */}
      <div className="row-span-2 col-span-3 bg-blue-200">
        {/* accordion header */}
        <div>header</div>
        {/* accordion content */}
      </div>
      {/* sortbar desktop */}
      <div className="hidden md:block md:col-span-9 bg-blue-200">sortbar</div>
      {/* blog section */}
      <div className="hidden md:block md:col-span-9 bg-blue-200">blog</div>
    </div>
  );
}
