import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ReactComponent as ClockIcon } from "../icons/clock.svg";
import { ReactComponent as EditIcon } from "../icons/edit.svg";
import { ReactComponent as DeleteIcon } from "../icons/delete.svg";

const AddServicesCard = ({ time, price, seviceName, serviceCategory }) => {
  const [isCardHoverd, setIsCardHoverd] = useState(false);
  return (
    <div
      onMouseEnter={() => setIsCardHoverd(true)}
      onMouseLeave={() => setIsCardHoverd(false)}
      style={{ gridTemplateColumns: "2fr 5fr 2fr" }}
      className="relative grid rounded-xl border border-five hover:shadow-custom bg-[#EAEAEA] dark:bg-darkbg1 shadow-two transition-all duration-300"
    >
      {isCardHoverd && (
        <div className="absolute flex gap-2 w-fit right-2 top-0 -translate-y-1/2">
          <div className="group py-2">
            <div
              className="cursor-pointer group-hover:animate-bounce rounded-full p-2 bg-white dark:bg-darkbg0"
              style={{ boxShadow: "1px 1px 4px 0px black" }}
            >
              <EditIcon width={14} height={14} />
            </div>
          </div>
          <div className="group py-2">
            <div
              className="cursor-pointer group-hover:animate-bounce rounded-full p-2 bg-white dark:bg-darkbg0"
              style={{ boxShadow: "1px 1px 4px 0px black" }}
            >
              <DeleteIcon width={14} height={14} />
            </div>
          </div>
        </div>
      )}

      <div className="h-[150px] p-1">
        <LazyLoadImage
          src="/images/id.png"
          alt="service_Img"
          className="rounded-lg  w-full h-full object-cover"
        />
      </div>
      <div className="h-[150px] flex flex-col justify-around p-2">
        <div>Service Name : {seviceName} </div>
        <div>Service Category : {serviceCategory}</div>
      </div>
      <div className="h-[150px] flex flex-col justify-around p-2">
        <div>Price : {price}$</div>
        <div className="flex">
          Time : <ClockIcon width={20} height={20} /> {time} Min
        </div>
      </div>
    </div>
  );
};

export default AddServicesCard;
