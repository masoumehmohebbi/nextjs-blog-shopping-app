import Input from "@/components/formInput";
import Layout from "@/containers/layout";
import { useFormik } from "formik";
import Link from "next/link";
import React from "react";
import * as Yup from "yup";

// validation schema
const validationSchema = Yup.object({
  email: Yup.string().required("ایمیل را وارد کنید").email("ایمیل نامعتبر است"),

  password: Yup.string()
    .required("رمز عبور را وارد کنید")
    .min(8, "رمز عبور باید حداقل شامل 8 کارارکتر باشد"),
});

// initial values
const initialValues = {
  email: "",
  password: "",
};

const SignIn = () => {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  const onSubmit = (values) => {
    const { email, password } = values;
  };

  return (
    <Layout>
      <div className="container md:max-w-md mx-auto mb-16">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col space-y-4"
        >
          <h1 className="text-violet-700 font-black text-2xl mb-4">ورود</h1>

          <Input name="email" formik={formik} label="ایمیل" />
          <Input
            name="password"
            formik={formik}
            label="رمز عبور"
            type="password"
          />

          <button
            type="submit"
            disabled={!formik.isValid}
            className="w-full rounded-lg p-2 bg-violet-800 text-white"
          >
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
