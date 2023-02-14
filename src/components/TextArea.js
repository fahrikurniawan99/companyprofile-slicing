export default function TextArea({ placeholder, className }) {
  return (
    <textarea
      cols="30"
      rows="10"
      placeholder={placeholder}
      className={`w-full bg-gray-100 px-8 py-5 outline-none border-none rounded-3xl ${className && className}`}
    ></textarea>
  );
}
