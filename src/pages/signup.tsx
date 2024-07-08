// @ts-nocheck
import Input from "@/components/formInput";
import Layout from "@/containers/layout";
import { useAuthActions } from "@/context/AuthContext";
import { useFormik } from "formik";
import Link from "next/link";
import React from "react";
import { SignUpFormValues } from "src/types/formInputs";
import * as Yup from "yup";

//  initial values
const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  password: "",
  confirmPassword: "",
};

// validation schema
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
    .oneOf([Yup.ref("password"), ""], "رمز عبور هم خوانی ندارد")
    .required("رمز عبور را مجددا وارد کنید "),
});

const SignUpForm = () => {
  const dispatch = useAuthActions();

  const onSubmit = (values: SignUpFormValues) => {
    const { name, email, phoneNumber, password } = values;

    dispatch({
      type: "SIGNUP",
      payload: { name, email, phoneNumber, password },
    });
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });
  return (
    <Layout>
      <div className="container px-4 md:px-0 md:max-w-md mx-auto mb-16">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col space-y-4"
        >
          <h1 className="text-violet-700 font-black text-2xl mb-4">ثبت نام</h1>
          <Input formik={formik} name="name" label="نام و نام خانوادگی" />
          <Input formik={formik} name="email" label="ایمیل" />
          <Input
            formik={formik}
            name="phoneNumber"
            label="شماره موبایل"
            type="tel"
            placeholder="09394296023"
          />
          <Input
            formik={formik}
            name="password"
            label="رمز عبور"
            type="password"
          />
          <Input
            formik={formik}
            name="confirmPassword"
            label="تکرار رمز عبور"
            type="password"
          />

          <button
            type="submit"
            disabled={!formik.isValid}
            className="w-full rounded-lg p-2 bg-violet-800 text-white"
          >
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

export default SignUpForm;
