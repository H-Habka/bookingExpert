import React from "react";
import { useEffect, useState } from "react";

const CounterDown = ({ amount, triggerFunction }) => {
  const [count, setCount] = useState(amount);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);
    if (count === 0) {
      triggerFunction();
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [count]);
  return <div className="flex justify-center items-center">
      <div className="shadow-custom border-8 border-one bg-two  rounded-full w-14 h-14 flex items-center justify-center">{count}</div>
  </div>;
};

export default CounterDown;
