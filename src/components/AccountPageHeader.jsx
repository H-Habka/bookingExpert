import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ReactComponent as ShareIcon } from "../icons/share.svg";
import { ReactComponent as SaveIcon } from "../icons/save.svg";
import { ReactComponent as LocationIcon } from "../icons/location.svg";
import { ReactComponent as StarFillIcon } from "../icons/starFill.svg";
import { useStore } from "../store";
const headerTestImage = require("../images/headerTest.webp");

const AccountPageHeader = ({ name = "Hossien Habka", rating = 4.6 }) => {
  const lang = useStore((state) => state.lang);
  return (
    <div>
      <div className="relative">
        <LazyLoadImage
          src={headerTestImage}
          alt="header"
          className="w-full sm:h-auto h-[180px]"
        />
        <div
          className={`absolute start-1/2 ${
            lang === "ar" ? "translate-x-1/2" : "-translate-x-1/2"
          }  lg:top-2 top-[2px] px-2 py-1 md:px-4 md:py-2 bg-[#191919aa] sm:text-3xl md:text-5xl rounded-xl text-white`}
        >
          {name}
        </div>
        <div className="absolute top-[2px] end-2 sm:end-4 md:end-6 w-fit flex gap-2">
          <div className="p-2 bg-[#191919aa] rounded-full cursor-pointer hover:opacity-80">
            <ShareIcon className="md:w-[32px] md:h-[32px] w-[14px] h-[14px] xs:w-[20px] xs:h-[20px]" />
          </div>
          <div className="p-2 bg-[#191919aa] rounded-full cursor-pointer hover:opacity-80">
            <SaveIcon className="md:w-[32px] md:h-[32px] w-[14px] h-[14px] xs:w-[20px] xs:h-[20px]" />
          </div>
        </div>
        <div className="absolute start-2 sm:start-4 md:start-8 bottom-2">
          <div className="bg-[#19191955] p-2 md:p-4 rounded-full">
            <div className="bg-white p-1 md:p-2 rounded-full cursor-pointer  hover:opacity-80">
              <LocationIcon className="md:w-[32px] md:h-[32px] w-[14px] h-[14px] xs:w-[20px] xs:h-[20px]" />
            </div>
          </div>
        </div>
        <div className="absolute bottom-2 end-2 flex gap-2 items-center rounded-lg p-1 bg-[#ffffff77]">
          <StarFillIcon className="md:w-[32px] md:h-[32px] w-[14px] h-[14px] xs:w-[20px] xs:h-[20px]" />
          <p className="text-sm md:text-xl text-two">{rating}</p>
        </div>
      </div>
    </div>
  );
};

export default AccountPageHeader;
