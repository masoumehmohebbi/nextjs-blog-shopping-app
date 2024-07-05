import Input from "@/components/formInput";
import Layout from "@/containers/layout";
import { useFormik } from "formik";
import Link from "next/link";
import React from "react";

//  initial values
const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const formik = useFormik({
    initialValues,
  });
  return (
    <Layout>
      <div className="container md:max-w-md mx-auto mb-16">
        <form className="flex flex-col space-y-4">
          <h1 className="text-violet-700 font-black text-2xl mb-4">ثبت نام</h1>
          <Input label="نام و نام خانوادگی" />
          <Input label="ایمیل" />
          <Input label="شماره موبایل" type="number" />
          <Input label="رمز عبور" type="password" />
          <Input label="تکرار رمز عبور" type="password" />

          <button className="w-full rounded-lg p-2 bg-violet-800 text-white">
            ثبت نام
          </button>
          <Link href="/signin">
            <p className="py-4 mt-4 cursor-pointer">
              قبلا ثبت نام کردی؟ لاگین کنید
            </p>
          </Link>
        </form>
      </div>
    </Layout>
  );
};

export default SignUp;
