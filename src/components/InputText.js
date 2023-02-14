export default function InputText({ className, placeholder, icon }) {
  return (
    <div
      className={`relative h-fit rounded-full bg-gray-100 px-8 py-3 ${
        className && className
      }`}
    >
      <input
        type={"text"}
        placeholder={placeholder}
        className="border-none bg-transparent outline-none"
      />
      <div className="absolute top-1/2 right-8 -translate-y-1/2 text-gray-400">
        {icon}
      </div>
    </div>
  );
}
