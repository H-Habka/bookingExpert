import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { ReactComponent as ClockIcon } from "../icons/clock.svg";
import { ReactComponent as EditIcon } from "../icons/edit.svg";
import { ReactComponent as DeleteIcon } from "../icons/delete.svg";
import { useMediaQuery } from "react-responsive";

const AddServicesCard = ({
  time = 30,
  price = 40,
  seviceName = "cuting hair",
  serviceCategory = "Baber",
}) => {
  const [isCardHoverd, setIsCardHoverd] = useState(false);
  const isSm = useMediaQuery({
    query: "(max-width:640px)",
  });
  return (
    <div
      data-aos="flip-down"
      onMouseEnter={() => setIsCardHoverd(true)}
      onMouseLeave={() => setIsCardHoverd(false)}
      style={{ gridTemplateColumns: isSm ? "" : "2fr 5fr 2fr" }}
      className={`relative rounded-xl border border-five hover:shadow-custom bg-[#EAEAEA] dark:bg-darkbg1 shadow-two transition-all duration-300 ${
        isSm ? "flex flex-col gap-4 min-w-[300px] items-center" : "grid"
      }`}
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
        <div className=" flex flex-col items-center sm:flex-row gap-2">
          <span className="text-lg font-semibold">
            Service Name {isSm ? "" : ":"}{" "}
          </span>
          <span>{seviceName}</span>
        </div>
        <div className=" flex flex-col items-center sm:flex-row gap-2">
          <span className="text-lg font-semibold">
            Service Category {isSm ? "" : ":"}{" "}
          </span>
          <span>{serviceCategory}</span>
        </div>
      </div>
      <div className="h-[150px] flex flex-col justify-around p-2">
        <div className=" flex flex-col items-center sm:flex-row gap-2">
          <span className="text-lg font-semibold">
            Price {isSm ? "" : ":"}{" "}
          </span>
          <span>{price}$</span>
        </div>
        <div className="flex flex-col items-center sm:flex-row gap-2">
          <span className="text-lg font-semibold">Time {isSm ? "" : ":"} </span>
          <span className="flex">
            <ClockIcon width={20} height={20} /> {time} Min
          </span>
        </div>
      </div>
    </div>
  );
};

export default AddServicesCard;
