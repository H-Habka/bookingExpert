import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useMediaQuery } from "react-responsive";
const testImage = require("../images/imageTest.jpg")

const BookItem = ({
  isModal,
  price = "80$",
  serviceName = "Mo Full Service",
  description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, reprehenderit nobis totam quae veritatis impedit doloremque sunt accusantium, recusandae odit qui iure corrupti aliquam, esse culpa consequuntur a cum voluptates?",
}) => {
  const isSm = useMediaQuery({
    query: "(max-width:640px)",
  });
  return (
    <div
      style={{
        gridTemplateColumns: isSm
          ? ""
          : isModal
          ? "1fr 2fr 1fr"
          : "1fr 3fr 1fr 1fr",
      }}
      className={`${
        isSm
          ? "flex flex-col items-center gap-4 w-fit max-w-[300px] mx-auto  border border-gray-400"
          : "grid gap-0"
      }  py-2 rounded-2xl px-2`}
    >
      <div className="flex items-center">
        <LazyLoadImage
          src={testImage}
          alt="profile"
          className=" m-auto sm:w-[100px] sm:h-[100px] rounded-full mx-auto w-[200px] h-[200px]"
        />
      </div>
      <div className="flex flex-col gap-4 justify-around px-4 text-center sm:text-start">
        <div className="text-xl font-bold">{serviceName}</div>
        {!isModal && (
          <div className="text-sm text-gray-500 dark:text-darktext">
            {description}
          </div>
        )}
      </div>
      {!isModal && (
        <div className=" flex items-center justify-center">
          <span>Price : </span> <span className="text-five">{price}</span>
        </div>
      )}

      <div className=" flex items-center justify-center">
        <button className="border border-two md:px-8 md:py-2 px-6 py-1 text-white hover:text-two hover:bg-white bg-two  hover:dark:bg-darkbg1 transition-all duration-300 rounded-full md:text-xl">
          Book
        </button>
      </div>
    </div>
  );
};

export default BookItem;
