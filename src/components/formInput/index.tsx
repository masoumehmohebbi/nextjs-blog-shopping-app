import { FormikProps } from "formik";

interface InputProps {
  placeholder?: string;
  formik: FormikProps<any>;
  name: string;
  label: string;
  type?: string;
}
export default function Input({
  placeholder,
  formik,
  name,
  label,
  type = "text",
}: InputProps) {
  return (
    <div className="flex flex-col gap-y-2">
      <div>
        <label htmlFor="name">{label}</label>

        {formik.touched[name] && formik.errors[name] ? (
          <div className="flex-1 ml-2 text-rose-500 text-left text-xs">
            {typeof formik.errors[name] === "string" && formik.errors[name]}
          </div>
        ) : null}
      </div>
      <input
        dir="ltr"
        placeholder={placeholder}
        className="w-full text-left border-gray-200 transition-all duration-200 text-sm border rounded focus:border-transparent outline-none p-2 focus:ring-2 focus:ring-violet-400"
        type={type}
        name={name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values[name]}
      />
    </div>
  );
}
