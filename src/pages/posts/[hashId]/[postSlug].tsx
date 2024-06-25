import PostInteraction from "@/components/posts/PostInteraction";
import { toPersianDigits } from "@/utils/toPersianDigits";
import { BookmarkIcon, LinkIcon } from "@heroicons/react/24/outline";
import { BookmarkIcon as SolideBookmarkIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io";
import { FaTelegram } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import { MdContentCopy } from "react-icons/md";
import PostList from "@/components/posts/PostList";

import toLocalDate from "@/utils/toLocalDate";
import Layout from "@/containers/layout";
import PostComments from "@/components/posts/postComments";
import axios from "axios";
console.log(process.env.NEXT_PUBLIC_DOMAIM_URL);
const PostPage = ({ post }) => {
  const [copied, setCopied] = useState(false);
  console.log(post);

  const copyHandler = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <Layout>
      <div>
        <div className="md:max-w-screen-lg container mx-auto">
          <header className="flex flex-col md:flex-row gap-y-5 md:justify-between md:items-start mb-12 mx-auto max-w-screen-md">
            {/* author data */}
            <div className="flex items-stretch">
              <img
                className="w-14 h-14 md:w-20 md:h-20 rounded-full ring-2 ring-white"
                src="/images/nuxtjs.png"
                alt={post.author.name}
              />
              <div className="flex flex-col mr-4 justify-between">
                <div>
                  <span className="font-extrabold text-base">
                    {post.author.name}
                  </span>
                  <Link
                    href={`/blogs/${post.category.englishTitle}`}
                    className="bg-white border border-blue-500 text-xs text-blue-500 px-3 py-1 mr-2 rounded-full transition-all duration-300 hover:bg-blue-500 hover:text-white"
                  >
                    {post.category.title}
                  </Link>
                </div>
                <span className="font-normal text-xs hidden md:block">
                  {post.author.biography}
                </span>

                <div className="font-normal text-myGray-400 text-sm ">
                  <span>{toLocalDate(post.createdAt)}</span>
                  <span className="mx-1"> &bull;</span>
                  <span>
                    <span> خواندن</span>
                    <span> {toPersianDigits(post.readingTime)} </span>
                    <span>دقیقه </span>
                  </span>
                </div>
              </div>
            </div>
            {/* interactions buttons */}
            <div className="flex">
              <button>
                <LinkIcon className="h-6 w-6 hover:text-black text-gray-500 cursor-pointer " />
              </button>
              <button className="mr-4 border border-gray-300 text-gray-500 hover:text-gray-600 rounded-full px-3 py-1 flex items-center">
                <span className="ml-1 text-xs ">
                  {post.isBookmarked ? "ذخیره شده" : "ذخیره"}
                </span>
                {post.isBookmarked ? (
                  <SolideBookmarkIcon className="h-6 w-6 fill-current" />
                ) : (
                  <BookmarkIcon className="h-6 w-6 stroke-current" />
                )}
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
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <img src={post.coverImage} alt="" />
            <h2>عنوان تستی دوم </h2>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <h2>نحوه کانفیگ تیلویند</h2>
            <p>
              بدون استفاده از{" "}
              <a href="https://highlightjs.org/">highlight.js</a> میتوان به
              سادگی کدها را داخل محتوای بلاگ ها قرار داد!
            </p>
            <p>
              به عنوان مثال، برای کانفیگ تیلویند باید از فایل{" "}
              <code>tailwind.config.js</code> استفاده کرد:
            </p>
            <pre dir="ltr">{`module.exports = {
  purge: [],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
`}</pre>
          </main>

          {/* post tags like-bookmark */}
          <section>
            <ul className="flex items-center flex-wrap gap-x-4 mb-6">
              {["ریکت", "جاوااسکریپت", "فرانت اند", "Next.js"].map(
                (tag, index) => {
                  return (
                    <li
                      key={index}
                      className="px-3 py-1 rounded-2xl bg-gray-200 hover:bg-gray-100 transition-all  cursor-pointer text-gray-600 tex-sm mb-3 block"
                    >
                      {tag}
                    </li>
                  );
                }
              )}
            </ul>
            <div className="flex items-center flex-col gap-y-8 md:flex-row md:justify-between">
              {/* like- comment- bookmark */}
              <PostInteraction
                post={post}
                className="justify-evenly w-full md:w-auto"
              />
              {/* share btns */}
              <div className="flex items-center gap-x-6 justify-around  w-full md:w-auto mb-8">
                <div className="flex items-center md:gap-x-4 gap-x-6 md:w-auto">
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${process.env.NEXT_PUBLIC_DOMAIM_URL}/posts/${post.hashId}/${post.slug}`}
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
                    href={`https://twitter.com/share?text=${post.title}&url=${process.env.NEXT_PUBLIC_DOMAIM_URL}/posts/${post.hashId}/${post.slug}`}
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
                    href={`https://telegram.me/share/url?url=${process.env.NEXT_PUBLIC_DOMAIM_URL}/posts/${post.hashId}/${post.slug}&text=${post.title}`}
                  >
                    <FaTelegram
                      className="fill-gray-400 hover:fill-gray-500 transition-all duration-300 cursor-pointer"
                      size={24}
                    />
                  </a>
                </div>
                <div className="relative">
                  <CopyToClipboard
                    text={`${process.env.NEXT_PUBLIC_DOMAIM_URL}/posts/${post.hashId}/${post.slug}`}
                    onCopy={copyHandler}
                  >
                    <div className="bg-gray-100 border px-3 py-1 rounded-2xl text-gray-600 flex items-center gap-x-2 cursor-pointer ">
                      <span className="text-sm md:text-base">
                        کپی&nbsp;لینک
                      </span>
                      <MdContentCopy size={24} />
                    </div>
                  </CopyToClipboard>
                  {copied && (
                    <span className="absolute -top-8 left-0 bg-blue-500 px-3 py-1 rounded-2xl text-white text-sm">
                      کپی شد
                    </span>
                  )}
                </div>
              </div>
            </div>
            <div className="border-t-2 border-gray-500 rounded w-full mb-8"></div>
          </section>
          {/* related posts */}
          <section className="mb-20">
            <h2 className="font-extrabold text-2xl md:text-3xl mb-8">
              پست های مشابه
            </h2>
            <div className="grid grid-cols-6 gap-10">
              <PostList blogsData={post.related} />
            </div>
          </section>
          {/* post comments */}
          <PostComments post={post} />
        </div>
        <div className="h-32 bg-gray-50"></div>
      </div>
    </Layout>
  );
};

export default PostPage;

export async function getServerSideProps(ctx) {
  const { query, req } = ctx;
  const {
    data: { data },
  } = await axios.get(`http://localhost:5000/api/posts/${query.postSlug}`);

  console.log(data);

  return {
    props: {
      post: data,
    },
  };
}
