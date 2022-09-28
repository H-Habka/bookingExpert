import React from "react";

const CustomSelectInput = ({
  className = "",
  label,
  error = false,
  isSubmitSuccessful = false,
  hasValue = false,
}) => {
  const stylesIfFieldEmpty = "top-1/2 -translate-y-1/2 opacity-0 z-[-1]";
  const stylesIfFieldFull = "-top-2 opacity-100 z-[1]";
  return (
    <div className=" z-[1]">
      {/* <div
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
      </div> */}
      <div className="px-2 mb-2">{label}</div>
      <select
        className={`${className} min-w-[300px] border rounded-lg border-black text-xl p-2 outline-none dark:bg-darkbg1`}
      >
        <option></option>
        <option>asd</option>
        <option>asd</option>
        <option>da</option>
        <option>ads</option>
        <option>asd</option>
        <option>asd</option>
      </select>
    </div>
  );
};

export default CustomSelectInput;
