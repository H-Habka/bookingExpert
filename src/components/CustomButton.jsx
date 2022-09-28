import React from "react";

const CustomButton = ({ title, reversed, onClick }) => {
  const reversedStyles =
    "bg-white text-two before:bg-two after:bg-two hover:text-white";
  const normalStyles =
    "bg-two text-white before:bg-white hover:text-two  after:bg-white";
  return (
    <button
      onClick={onClick}
      className={`${
        reversed ? reversedStyles : normalStyles
      } text-lg rounded-xl overflow-hidden text-semibold m-2 md:px-6 px-4 py-1 border-2 border-two transition-all before:h-0 before:absolute duration-500 before:w-full relative before:left-0 before:top-0 before:z-[-1] z-[1] after:h-0 after:absolute after:w-full after:left-0 after:bottom-0 after:z-[-1] before:transition-all before:duration-500 after:transition-all after:duration-500 hover:before:h-1/2 hover:after:h-1/2`}
    >
      <p>{title}</p>
    </button>
  );
};

export default CustomButton;
