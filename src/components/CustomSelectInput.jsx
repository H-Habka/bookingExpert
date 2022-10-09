import React from "react";
import { useTranslation } from "react-i18next";

const CustomSelectInput = ({
  className = "",
  label,
  error = false,
  isSubmitSuccessful = false,
  hasValue = false,
}) => {
  const { t } = useTranslation();
  const stylesIfFieldEmpty = "top-1/2 -translate-y-1/2 opacity-0 z-[-1]";
  const stylesIfFieldFull = "-top-2 opacity-100 z-[1]";
  return (
    <div data-aos="flip-up" className=" z-[1]">
      <div className="px-2 mb-2">{t(label)}</div>
      <select
        className={`${className} min-w-[300px] border rounded-lg border-black text-xl p-2 outline-none dark:bg-darkbg1 dark:border-darktext`}
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
