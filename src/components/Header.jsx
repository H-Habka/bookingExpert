import NavList from "./NavList";
// import { ReactComponent as Logo } from "../icons/logo.svg";
import { ReactComponent as DoubleArrowDown } from "../icons/doubleArrowDown.svg";
import { ReactComponent as DoubleArrowUp } from "../icons/doubleArrowUp.svg";
import { ReactComponent as LogoLight } from "../icons/logoLight.svg";
import CustomButton from "./CustomButton";
import LightDarkToggle from "./LightDarkToggle";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate, useLocation } from "react-router-dom";
import ProfileProgress from "./ProfileProgress";
import { useStore } from "../store";

const navData = [
  { idx: 0, title: "Home", to: "/" },
  { idx: 1, title: "About", to: "/About" },
  { idx: 2, title: "Features", to: "/Features" },
  { idx: 3, title: "Contact", to: "/Contact" },
];

const Header = ({ refprop }) => {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeOne, setActiveOne] = useState(-1);
  const isLg = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  const navigate = useNavigate();
  const isDark = useStore((state) => state.isDark);

  useEffect(() => {
    let activeItem = navData.filter((item) => item.to === location.pathname)[0];
    setActiveOne(activeItem ? activeItem.idx : -1);
  }, [location]);

  return (
    <div
      ref={refprop}
      className="border-b border-gray-400 sticky top-0 bg-white z-[50]"
    >
      <div className="h-20 bg- dark:bg-darkbg0 dark:text-darktext px-2 sm:px-10 flex justify-between items-center font-bold">
        {isDark ? (
          <div>
            <img src="/images/logoDark.png" alt="logo" height={90} width={90} />
          </div>
        ) : (
          <LogoLight className="w-[80px] h-[80px]" />
        )}
        {isLg && (
          <div className="">
            <NavList
              navData={navData}
              activeOne={activeOne}
              setActiveOne={setActiveOne}
            />
          </div>
        )}
        <div className="flex sm:gap-4 gap-1 items-center">
          <div className=" border-4 hover:border-blue-500 border-transparent transition-all duration-300 rounded-full">
            <div className="flex item-center justify-center rounded-full bg-[#99a3fb]">
              <LightDarkToggle size={36} />
            </div>
          </div>
          {/* <button className="border-4 hover:border-blue-500 rounded-full border-transparent transition-all duration-300">
            <img
              src="/images/translate.webp"
              alt="translate"
              width={36}
              height={36}
            />
          </button> */}
          <CustomButton title="Login" onClick={() => navigate("/auth/login")} />
        </div>
      </div>
      {!isLg && (
        <div>
          <div
            className={`${
              isExpanded ? "h-[52px] py-2" : "h-0"
            } transition-all duration-500  overflow-hidden  dark:bg-darkbg1 border-t border-gray-500`}
          >
            <NavList
              navData={navData}
              activeOne={activeOne}
              setActiveOne={setActiveOne}
            />
          </div>
          <button
            onClick={() => setIsExpanded((prev) => !prev)}
            className="w-full flex justify-center items-center dark:bg-darkbg0  bg-gray-200 border-y border-gray-300"
          >
            {isExpanded ? (
              <DoubleArrowUp width={24} height={24} />
            ) : (
              <DoubleArrowDown width={24} height={24} />
            )}
          </button>
        </div>
      )}
      {location.pathname === "/profile" && <ProfileProgress persentage={20} />}
    </div>
  );
};

export default Header;
