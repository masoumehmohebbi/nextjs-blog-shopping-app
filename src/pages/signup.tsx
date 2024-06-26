import { useFormik } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import Input from "@/components/FormInput";
import Head from "next/head";
import Layout from "@/containers/Layout";

import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { userSignup } from "src/redux/user/userActions";

//  initial values
const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
};

//  validation schema
const validationSchema = Yup.object({
  name: Yup.string()
    .required("نام و نام خانوادگی را وارد کنید")
    .min(6, "نام و نام خانوادگی باید حداقل شامل 6 کاراکتر باشد"),
  email: Yup.string().required("ایمیل را وارد کنید").email("ایمیل نامعتبر است"),
  phoneNumber: Yup.string()
    .required("شماره موبایل را وارد کنید")
    .matches(/^[0-9]{11}$/, "شماره موبایل باید 11 رقم باشد")
    .nullable(),
  password: Yup.string()
    .required("رمز عبور را وارد کنید")
    .min(8, "رمز عبور باید حداقل شامل 8 کارارکتر باشد"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "رمز عبور را مجددا وارد کنید")
    .required("رمز عبور هم خوانی ندارد"),
});

const SignupForm = () => {
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userSignin);
  const { user } = userInfo;
  const router = useRouter();

  useEffect(() => {
    if (user) router.push("/");
  }, [user]);
  //  onSubmit
  const onSubmit = (values) => {
    const { name, email, phoneNumber, password } = values;
    dispatch(userSignup({ name, email, password, phoneNumber }));
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <Layout>
      <Head>
        <title>Front Hooks- Signup</title>
      </Head>
      <div className="md:max-w-md px-4 md:px-4 container  mx-auto">
        <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-4">
          <h1 className="font-black text-2xl text-violet-700 mb-4">ثبت نام</h1>
          <Input label="نام و نام خانوادگی" name="name" formik={formik} />
          <Input label="ایمیل" name="email" formik={formik} />
          <Input
            type="tel"
            label="شماره موبایل"
            name="phoneNumber"
            formik={formik}
            placeholder="09121234567"
          />
          <Input label="رمز عبور" name="password" type="password" formik={formik} />
          <Input label="تکرار رمز" name="confirmPassword" type="password" formik={formik} />

          <button
            type="submit"
            disabled={!formik.isValid}
            className="w-full py-2 rounded-lg bg-violet-800 text-white"
          >
            ثبت نام
          </button>
          <Link href="/signin">
            <p className="mt-4 py-4 cursor-pointer">قبلا ثبت نام کردی ؟ لاگین کنید</p>
          </Link>
        </form>
      </div>
    </Layout>
  );
};

export default SignupForm;
