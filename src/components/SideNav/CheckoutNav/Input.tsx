import React from "react";
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = ({ className, ...rest }: InputProps) => {
  return (
    <input
      className={`p-3 w-full transition-all bg-gray-100 placeholder:text-sm placeholder:text-gray-500 outline-none border border-transparent hover:border-gray-500 focus:border-gray-900 focus:placeholder-black  rounded-md ${className}`}
      {...rest}
    />
  );
};

export default Input;
