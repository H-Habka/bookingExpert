import React from "react";
import { SpinnerCircular } from "spinners-react";

const Loader = ({ size = 25, thickness = 100, speed = 100 }) => {
  return (
    <div className="flex justify-center items-center p-1">
      <SpinnerCircular
        size={size}
        thickness={thickness}
        speed={speed}
        color="#FFF"
        secondaryColor="black"
      />
    </div>
  );
};

export default Loader;
