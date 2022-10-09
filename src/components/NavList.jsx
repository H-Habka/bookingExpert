import NavItem from "./NavItem";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

const NavList = ({ navData, truck }) => {
  const [activeOne, setActiveOne] = useState(-1);
  const location = useLocation();
  const { i18n } = useTranslation();
  const itemRef = useRef();


  useEffect(() => {
    let activeItem = navData.filter((item) => item.to === location.pathname)[0];
    setActiveOne(activeItem ? activeItem.idx : -1);
  }, [location]);


  return (
    <div
      className={`grid relative`}
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
          left: `${
            (i18n.resolvedLanguage === "ar"
              ? navData.length - activeOne - 1
              : activeOne) * itemRef?.current?.offsetWidth
          }px`,
          boxShadow: "0px 0px 3px 0px #0305fa",
        }}
      />
      {truck && (
        <div className="absolute bg-gray-400 h-[2px] bottom-0 transition-all duration-300 w-full z-[-1] start-0" />
      )}
    </div>
  );
};

export default NavList;
