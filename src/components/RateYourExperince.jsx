import { ReactComponent as FillStarIcon } from "../icons/starFill.svg";
import { ReactComponent as EmptyStarIcon } from "../icons/starEmpty.svg";
import { useState } from "react";

const RateYourExperince = () => {
  const [HoverdOne, setHoverdOne] = useState(-1);
  const [SelectedOne, setSelectedOne] = useState(-1);
  return (
    <div className="flex flex-col gap-4 items-center p-2 w-fit">
      <div className="flex">
        {Array(5)
          .fill()
          .map((_, idx) =>
            idx <= HoverdOne || idx <= SelectedOne ? (
              <div onMouseLeave={() => setHoverdOne(-1)} className="p-1">
                <FillStarIcon
                  onClick={() =>
                    setSelectedOne((prev) => (prev === idx ? -1 : idx))
                  }
                  key={idx}
                  className="w-[30px] h-[30px] cursor-pointer"
                />
              </div>
            ) : (
              <div
                onMouseEnter={() => setHoverdOne(idx)}
                onMouseLeave={() => setHoverdOne(-1)}
                className="p-1"
              >
                <EmptyStarIcon
                  key={idx}
                  className="w-[30px] h-[30px] cursor-pointer"
                  fill="gray"
                  fillOpacity={0.5}
                />
              </div>
            )
          )}
      </div>
      <div
        className="font-semibold text-lg"
      >
        Rate Your Experince
      </div>
    </div>
  );
};

export default RateYourExperince;
