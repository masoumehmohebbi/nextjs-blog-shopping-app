export default function Input({ label, type = "text" }) {
  return (
    <div className="flex flex-col gap-y-2">
      <div>
        <label htmlFor="name">{label}</label>
      </div>
      <input
        type={type}
        className="w-full text-left border-gray-200 transition-all duration-200 text-sm border rounded focus:border-transparent outline-none p-2 focus:ring-2 focus:ring-violet-400"
      />
    </div>
  );
}
