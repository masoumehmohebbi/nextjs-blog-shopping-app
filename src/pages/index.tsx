import { Inter } from "next/font/google";
import Layout from "src/containers/layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <main className="grid grid-cols-2 justify-items-center gap-x-2 flex-1 px-4 py-2 container xl:max-w-screen-lg mx-auto">
        <div className="col-span-2 md:col-span-1 flex flex-col md:pt-7 gap-y-6 text-slate-800">
          <span className="text-xl md:text-2xl font-bold mb-2">
            به سایت بلاگـ شاپـ خوش آمدید
          </span>
          <p className="text-sm md:text-base">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرای بهبود ابزارهای کاربردی می
            باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
            جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
            طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
            فارسی ایجاد کرد.
          </p>
          <span className="text-violet-700 text-base mb-7 md:mb-0 md:text-lg font-semibold">
            برای دیدن بلاگ ها وارد شوید
          </span>
        </div>
        <img
          className="hidden md:block scale-x-[-1] w-[500px] h-[400px] object-center object-cover"
          src="/images/online-shop.svg"
          alt="shopping"
        />
      </main>
    </Layout>
  );
}
