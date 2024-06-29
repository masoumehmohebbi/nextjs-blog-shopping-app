import { Inter } from "next/font/google";
import Layout from "src/containers/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <main className="flex items-center flex-col pt-5">
        <span className="text-lg mb-2">به سایت فروشگاهی خوش آمدید</span>
        <span>برای دیدن بلاگ ها وارد شوید</span>
      </main>
    </Layout>
  );
}
