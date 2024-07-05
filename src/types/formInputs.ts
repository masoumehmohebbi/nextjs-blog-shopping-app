import { FormikProps } from "formik";

export interface InputProps {
  placeholder?: string;
  formik: FormikProps<any>;
  name: string;
  label: string;
  type?: string;
}

export interface SignInFormValues {
  email: string;
  password: string;
}

export interface SignUpFormValues {
  email: string;
  password: string;
  name: string;
  phoneNumber: string;
  confirmPassword: string;
}
