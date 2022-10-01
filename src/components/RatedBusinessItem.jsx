import { LazyLoadImage } from "react-lazy-load-image-component";
import { ReactComponent as FillStarIcon } from "../icons/starFill.svg";

const RatedBusinessItem = ({ title = "hossien", Rate = "4.5" }) => {
  return (
    <div className="flex flex-col items-center  max-w-[300px] text-center xs:text-start gap-4 px-4 xs:flex-row xs:max-w-[700px]">
      <div className="min-w-[100px]">
        <LazyLoadImage
          src="/images/imageTest.jpg"
          alt="business"
          className="w-[100px] h-[100px] rounded-full"
        />
      </div>
      <div className="flex flex-col gap-2 xs:py-4">
        <div className="flex justify-between">
          <div className="text-xl font-bold ">{title}</div>
          <div className="flex">
            <FillStarIcon className="w-[20px] h-[20px]" />
            <span>{Rate}</span>
          </div>
        </div>
        <div className="text-sm text-gray-700 dark:text-gray-400">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi
          ratione quos quae ex nisi eius placeat ab dolore, necessitatibus
          temporibus beatae provident modi laudantium corrupti corporis
          eligendi! Vero, voluptatibus nam.
        </div>
      </div>
    </div>
  );
};

export default RatedBusinessItem;
