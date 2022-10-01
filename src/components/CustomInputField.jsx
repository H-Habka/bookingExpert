import React, { useState } from "react";
import { ReactComponent as Eye } from "../icons/eye.svg";
import { ReactComponent as EyeSlash } from "../icons/eyeSlash.svg";

const CustomInputField = ({
  type,
  label,
  width,
  className,
  register,
  error,
  isSubmitSuccessful,
}) => {
  const stylesIfFieldEmpty = "top-1/2 -translate-y-1/2 opacity-0 z-[-1]";
  const stylesIfFieldFull = "-top-2 opacity-100 z-[1]";
  const [hasValue, setHasValue] = useState(false);
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const isPassword = type === "password"
  return (
    <div data-aos="flip-up" className="w-fit relative group">
      <input
        {...register}
        type={passwordVisibility ? "text" : type}
        className={`dark:bg-darkbg1 dark:text-darktext dark:placeholder:text-darktext rounded-lg outline-none border  p-2 text-xl placeholder:text-black placeholder:focus:text-transparent dark:placeholder:focus:text-transparent placeholder:transition-all placeholder:duration-500 placeholder:text-sm  ${
          error
            ? "border-red-600 focus:border-red-600"
            : isSubmitSuccessful
            ? "border-green-700"
            : "border-black dark:border-darktext dark:focus:border-two focus:border-two "
        } ${className}`}
        style={{
          boxShadow: error
            ? "0px 0px 3px 0px red"
            : isSubmitSuccessful
            ? "0px 0px 3px 0px green"
            : "",
        }}
        onChange={(e) => {
          if (e.target.value) {
            setHasValue(true);
          } else {
            setHasValue(false);
          }
        }}
        placeholder={label}
      />
      <div
        className={`${
          hasValue ? stylesIfFieldFull : stylesIfFieldEmpty
        } absolute bg-white dark:bg-darkbg1 px-2  left-2 group-focus-within:-top-2 group-focus-within:-translate-y-0 translate-all duration-300 group-focus-within:opacity-100  text-sm group-focus-within:z-[1]  ${
          error
            ? "text-red-600"
            : isSubmitSuccessful
            ? "text-green-700"
            : "group-focus-within:text-two"
        }`}
      >
        {label}
      </div>
      {isPassword && (
        <button
          type="button"
          onClick={() => setPasswordVisibility((prev) => !prev)}
          className="absolute right-2 top-1/2 -translate-y-1/2 "
        >
          {passwordVisibility ? (
            <EyeSlash width={24} height={24} />
          ) : (
            <Eye width={24} height={24} />
          )}
        </button>
      )}
    </div>
  );
};

export default CustomInputField;
