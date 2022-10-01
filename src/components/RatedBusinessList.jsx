import React from "react";
import RatedBusinessItem from "./RatedBusinessItem";

const RatedBusinessList = ({ length = 6 }) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      {Array(length)
        .fill()
        .map((_, idx) => (
          <RatedBusinessItem />
        ))}
    </div>
  );
};

export default RatedBusinessList;
