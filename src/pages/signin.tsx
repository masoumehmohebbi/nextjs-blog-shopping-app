import Input from "@/components/formInput";
import Layout from "@/containers/layout";
import Link from "next/link";
import React from "react";

const SignIn = () => {
  return (
    <Layout>
      <div className="container md:max-w-md mx-auto mb-16">
        <form className="flex flex-col space-y-4">
          <h1 className="text-violet-700 font-black text-2xl mb-4">ورود</h1>

          <Input label="ایمیل" />
          <Input label="رمز عبور" type="password" />

          <button className="w-full rounded-lg p-2 bg-violet-800 text-white">
            ورود
          </button>
          <Link href="/signup">
            <p className="py-4 mt-4 cursor-pointer">
              هنوز ثبت نام نکردی؟ ثبت نام کنید
            </p>
          </Link>
        </form>
      </div>
    </Layout>
  );
};

export default SignIn;
