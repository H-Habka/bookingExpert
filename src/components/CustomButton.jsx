import React from "react";
import { useTranslation } from "react-i18next";

const CustomButton = ({ title, reversed, onClick }) => {
  const { t } = useTranslation();
  const reversedStyles =
    "bg-white text-two before:bg-two after:bg-two hover:text-white";
  const normalStyles =
    "bg-two text-white before:bg-white hover:text-two  after:bg-white";
  return (
    <button
      onClick={onClick}
      className={`${
        reversed ? reversedStyles : normalStyles
      } whitespace-nowrap text-lg rounded-xl overflow-hidden text-semibold m-2 md:px-6 px-2 py-1 border-2 border-two transition-all before:h-0 before:absolute duration-500 before:w-full relative before:start-0 before:top-0 before:z-[-1] z-[1] after:h-0 after:absolute after:w-full after:start-0 after:bottom-0 after:z-[-1] before:transition-all before:duration-500 after:transition-all after:duration-500 hover:before:h-1/2 hover:after:h-1/2`}
    >
      <p>{t(title)}</p>
    </button>
  );
};

export default CustomButton;
