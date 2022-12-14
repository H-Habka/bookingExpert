import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
let Data = [
  "+963",
  "+943",
  "+245",
  "+1",
  "+542",
  "+236",
  "+987",
  "+256",
  "+232",
  "+557",
  "+589",
  "+984",
  "+44",
];
const AutoComplate1 = ({
  type,
  label,
  className,
  register,
  error,
  isSubmitSuccessful,
  watch,
  reset,
}) => {
  const { t } = useTranslation();
  const codeValue = watch("phone_code", "");
  const stylesIfFieldEmpty = "top-1/2 -translate-y-1/2 opacity-0 z-[-1]";
  const stylesIfFieldFull = "-top-2 opacity-100 z-[1]";
  const [filterdData, setFilterdData] = useState([]);
  const handleInputChange = (e) => {
    if (codeValue) {
      setFilterdData(Data.filter((item) => item.startsWith(codeValue)));
    } else {
      setFilterdData([]);
    }
  };

  useEffect(() => {
    handleInputChange();
  }, [codeValue]);

  return (
    <div data-aos="flip-up" className="w-fit relative group z-10">
      <input
        {...register("phone_code", {
          // required: true,
          maxLength: 30,
          validate: (value) =>
            Data.find((item) => item === value) ? true : false,
        })}
        autoComplete="off"
        // value={value}
        type={type}
        className={`dark:bg-darkbg1 dark:text-darktext dark:placeholder:text-darktext rounded-lg outline-none border  p-2 text-xl placeholder:text-black placeholder:focus:text-transparent dark:placeholder:focus:text-transparent placeholder:transition-all placeholder:duration-500 placeholder:text-sm disabled:bg-gray-400 ${
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
        placeholder={t(label)}
      />
      <div
        className={`${
          codeValue ? stylesIfFieldFull : stylesIfFieldEmpty
        } absolute bg-white dark:bg-darkbg1 px-2  start-2 group-focus-within:-top-2 group-focus-within:-translate-y-0 translate-all duration-300 group-focus-within:opacity-100  text-sm group-focus-within:z-[1]  ${
          error
            ? "text-red-600"
            : isSubmitSuccessful
            ? "text-green-700"
            : "group-focus-within:text-two"
        }`}
      >
        {t(label)}
      </div>
      {!Data.find((item) => item === codeValue) && (
        <div className="absolute top-full z-[50] bg-gray-300 w-full text-lg max-h-[200px] overflow-auto scrollbar-thin">
          {filterdData.map((item, idx) => (
            <button
              onClick={() => reset({ phone_code: item })}
              className="p-1 block w-full"
              key={idx}
              type="button"
            >
              {item}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default AutoComplate1;
