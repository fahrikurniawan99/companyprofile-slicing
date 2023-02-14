import React from "react";

export default function Button({
  className,
  variant,
  text,
  children,
  ...props
}) {
  return (
    <button
      {...props}
      className={`rounded-full px-5 py-2 font-semibold ${
        variant === "outline"
          ? "border-2 border-orange-600"
          : "bg-orange-600 shadow-md"
      } ${className && className}`}
    >
      {children ? children : text}
    </button>
  );
}
