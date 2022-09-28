import NavItem from "./NavItem";
import { useEffect, useRef, useState } from "react";

const NavList = ({ navData, truck, activeOne, setActiveOne }) => {
  const itemRef = useRef();
  return (
    <div
      className="grid relative z-[1]"
      style={{ gridTemplateColumns: `repeat(${navData?.length}, 1fr)` }}
    >
      {navData?.map((item) => (
        <NavItem
          item={item}
          activeOne={activeOne}
          setActiveOne={setActiveOne}
          key={item.idx}
          refProp={item.idx === 0 && itemRef}
        />
      ))}
      <div
        className={`absolute bg-blue-700 ${
          activeOne >= 0 ? "h-[2px]" : "h-0"
        } bottom-0 transition-all duration-300`}
        style={{
          width: `${itemRef?.current?.offsetWidth}px`,
          left: `${activeOne * itemRef?.current?.offsetWidth}px`,
          boxShadow: "0px 0px 3px 0px #0305fa",
        }}
      />
      {truck && (
        <div className="absolute bg-gray-400 h-[2px] bottom-0 transition-all duration-300 w-full z-[-1] left-0" />
      )}
    </div>
  );
};

export default NavList;
