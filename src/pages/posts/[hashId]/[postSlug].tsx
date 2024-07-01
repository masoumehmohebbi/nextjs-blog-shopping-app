import DesktopCategory from "@/components/posts/DesktopCategory";
import PostInteraction from "@/components/posts/PostInteraction";
import SortBar from "@/components/posts/SortBar";
import Layout from "@/containers/layout";
import useMoveBack from "@/hooks/useMoveBack";
import http from "@/services/httpService";
import toLocalDate from "@/utils/toLocalDate";
import toPersianDigits from "@/utils/toPersianDigits";
import {
  ArrowLongRightIcon,
  BookmarkIcon,
  LinkIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import React, { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { FaTelegram } from "react-icons/fa";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";
import { MdContentCopy } from "react-icons/md";

const PostDetails = ({ post }) => {
  const [copied, setCopied] = useState(false);
  const moveBack = useMoveBack();

  const copHandler = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <Layout>
      <div className="md:max-w-screen-md container mx-auto">
        <div className="flex items-center mb-9">
          <button
            onClick={moveBack}
            className="flex items-center transition-all duration-300 gap-x-1 bg-violet-500 text-white hover:bg-violet-200 hover:text-violet-800 rounded-lg py-1 px-1.5"
          >
            <ArrowLongRightIcon className="w-6 h-6" />
            <span>برگشت</span>
          </button>
        </div>
        <header className="flex items-center justify-between mb-12">
          {/* author data */}
          <div className="flex items-stretch gap-x-2">
            <img
              className="w-14 md:w-20 h-14 md:h-20 rounded-full ring ring-violet-300 shadow-sm"
              src="/images/author.png"
              alt={post.author.name}
            />

            <div className="flex flex-col mr-4 justify-between">
              <div className="flex gap-x-1">
                <span>{post.author.name}</span>
                <Link
                  href={`/`}
                  className="rounded-xl transition-all duration-200 bg-violet-200 text-violet-600 hover:text-violet-100 hover:bg-violet-600 px-2 text-sm py-0.5"
                >
                  {post.category.englishTitle}
                </Link>
              </div>
              <span>{post.author.biography}</span>

              <div className="flex items-center gap-x-1">
                <span>{toLocalDate(post.createdAt)}</span>
                <span className="mx-1">&bull;</span>
                <div>
                  <span>خواندن</span>
                  <span> {toPersianDigits(post.readingTime)} </span>
                  <span>دقیقه</span>
                </div>
              </div>
            </div>
          </div>
          {/* interactions buttons */}
          <div className="flex gap-x-7">
            <button>
              <LinkIcon className="h-6 w-6 hover:text-slate-800 text-violet-500 cursor-pointer " />
            </button>
            <button className="rounded-2xl items-center flex gap-x-1 transition-all duration-200 bg-gray-200 text-gray-600 hover:text-gray-100 hover:bg-gray-600 px-2 py-1 text-sm">
              <span>ذخیره</span>
              <BookmarkIcon className="w-6 h-6" />
            </button>
          </div>
        </header>
        <main
          className="prose prose-xl prose-slate prose-h1:text-xl md:prose-h1:text-3xl  prose-h1:font-black prose-h2:text-xl md:prose-h2:text-2xl prose-h2:font-extrabold prose-p:text-base prose-p:leading-8 md:prose-p:text-lg md:prose-p:leading-10
        prose-img:rounded-xl prose-a:text-blue-500 mb-8 max-w-screen-md  mx-auto
        "
        >
          <h1>{post.title}</h1>
          <h2>عنوان اول تستی</h2>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
          <img src={post.coverImage} alt={post.title} />
          <h2>عنوان تستی دوم </h2>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
            استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
            و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای
            زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
            متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد
            کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
            راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
            حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود
            طراحی اساسا مورد استفاده قرار گیرد.
          </p>
          <h2>نحوه کانفیگ تیلویند</h2>
          <p>
            بدون استفاده از
            <a href="https://highlightjs.org/">highlight.js</a> میتوان به سادگی
            کدها را داخل محتوای بلاگ ها قرار داد!
          </p>
          <p>
            به عنوان مثال، برای کانفیگ تیلویند باید از فایل{" "}
            <code>tailwind.config.js</code> استفاده کرد:
          </p>
          <pre dir="ltr">
            {`module.exports = {
purge: [],
theme: {
  extend: {},
},
variants: {},
plugins: [],
}`}
          </pre>
        </main>
        {/* post tags like-bookmark */}
        <ul className="flex items-center gap-x-4 flex-wrap mb-6">
          {["ریکت", "جاوااسکریپت", "فرانت اند", "Next.js"].map((tag, index) => (
            <li
              key={index}
              className="px-3 py-1 rounded-2xl bg-violet-200 hover:bg-violet-100 transition-all  cursor-pointer text-violet-600 tex-sm mb-3 block"
            >
              {tag}
            </li>
          ))}
        </ul>
        <section className="flex items-center justify-between mb-6">
          {/* like- comment- bookmark */}
          <PostInteraction
            post={post}
            className="justify-evenly w-full md:w-auto"
          />
          {/* share buttons */}
          <div className="flex items-center gap-x-6">
            <div className="flex items-center md:gap-x-4 gap-x-6 md:w-auto">
              <a
                href={`https://www.linkedin.com/sharing/share-offsite/?url=${process.env.NEXT_PUBLIC_DOMAIN_URL}/posts/${post.hashId}/${post.slug}`}
                target="_blank"
                className="block"
                rel="noreferrer"
              >
                <IoLogoLinkedin
                  size={30}
                  className="fill-gray-400 hover:fill-gray-500 transition-all duration-300 cursor-pointer"
                />
              </a>
              <a
                href={`https://twitter.com/share?text=${post.title}&url=${process.env.NEXT_PUBLIC_DOMAIN_URL}/posts/${post.hashId}/${post.slug}`}
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <IoLogoTwitter
                  size={24}
                  className="fill-gray-400  hover:fill-gray-500 transition-all duration-300 cursor-pointer"
                />
              </a>
              <a
                className="block"
                rel="noreferrer"
                target="_blank"
                href={`https://telegram.me/share/url?url=${process.env.NEXT_PUBLIC_DOMAIN_URL}/posts/${post.hashId}/${post.slug}&text=${post.title}`}
              >
                <FaTelegram
                  className="fill-gray-400 hover:fill-gray-500 transition-all duration-300 cursor-pointer"
                  size={24}
                />
              </a>
            </div>
            <div className="relative">
              <CopyToClipboard
                text={`${process.env.NEXT_PUBLIC_DOMAIN_URL}/posts/${post.hashId}/${post.slug}&text=${post.title}`}
                onCopy={copHandler}
              >
                <div className="bg-gray-100 border px-3 py-1 rounded-2xl text-gray-600 flex items-center gap-x-2 cursor-pointer ">
                  <span className="text-sm md:text-base">کپی&nbsp;لینک</span>
                  <MdContentCopy size={24} />
                </div>
              </CopyToClipboard>
              {copied && (
                <span className="absolute -top-8 left-0 bg-violet-500 px-3 py-1 rounded-2xl text-white text-sm">
                  کپی شد
                </span>
              )}
            </div>
          </div>
        </section>
        <div className="border-t-2 border-gray-500 rounded w-full mb-8"></div>
      </div>
    </Layout>
  );
};

export default PostDetails;

export async function getServerSideProps(ctx) {
  const { query, req } = ctx;
  const { postSlug } = query;
  const {
    data: { data },
  } = await http.get(`/posts/${postSlug}`);

  return {
    props: {
      post: data,
    },
  };
}
