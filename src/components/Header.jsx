import NavList from "./NavList";
// import { ReactComponent as Logo } from "../icons/logo.svg";
import { ReactComponent as DoubleArrowDown } from "../icons/doubleArrowDown.svg";
import { ReactComponent as DoubleArrowUp } from "../icons/doubleArrowUp.svg";
import { ReactComponent as LogoLight } from "../icons/logoLight.svg";
import CustomButton from "./CustomButton";
import LightDarkToggle from "./LightDarkToggle";
import { useEffect, useLayoutEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useNavigate, useLocation } from "react-router-dom";
import ProfileProgress from "./ProfileProgress";
import { useStore } from "../store";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useTranslation } from "react-i18next";
const logoDarkImage = require("../images/logoDark.png");
const translateImage = require("../images/translate.webp");

const langs = {
  ar: { nativeName: "Arabic" },
  en: { nativeName: "English" },
  gr: { nativeName: "German" },
  fr: { nativeName: "France" },
};

const navData = [
  { idx: 0, title: "Home", to: "/" },
  { idx: 1, title: "About", to: "/About" },
  { idx: 2, title: "Features", to: "/Features" },
  { idx: 3, title: "Contact", to: "/Contact" },
];

const Header = ({ refprop }) => {
  const location = useLocation();
  const [isExpanded, setIsExpanded] = useState(false);
  const isLg = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  const navigate = useNavigate();
  const isDark = useStore((state) => state.isDark);
  const user = useStore((state) => state.user);
  const setUser = useStore((state) => state.setUser);
  const { i18n, t } = useTranslation();
  const lang = useStore((state) => state.lang);
  const setLang = useStore((state) => state.setLang);

  useLayoutEffect(() => {
    let userPersist = localStorage.getItem("user");
    if (userPersist) setUser(JSON.parse(userPersist));
  }, []);

  return (
    <div
      ref={refprop}
      className="border-b border-gray-400 sticky top-0 bg-white z-[50]"
    >
      <div className="h-20 dark:bg-darkbg0 dark:text-darktext px-2 sm:px-10 flex justify-between items-center font-bold">
        {isDark ? (
          <div>
            <LazyLoadImage
              src={logoDarkImage}
              alt="logo"
              height={90}
              width={90}
            />
          </div>
        ) : (
          <LogoLight className="w-[80px] h-[80px]" />
        )}
        {isLg && (
          <div className="">
            <NavList navData={navData} />
          </div>
        )}
        <div className="flex sm:gap-4 gap-1 items-center z-[1]">
          <div className=" border-4 hover:border-blue-500 border-transparent transition-all duration-300 rounded-full">
            <div className="flex item-center justify-center rounded-full bg-[#99a3fb]">
              <LightDarkToggle size={36} />
            </div>
          </div>
          <div className="group relative cursor-pointer border-4 hover:border-blue-500 rounded-full border-transparent transition-all duration-300">
            <LazyLoadImage
              src={translateImage}
              alt="translate"
              width={36}
              height={36}
            />
            <div
              className={`absolute cursor-default w-40 group-hover:h-36 opacity-0 bg-red-900 z-[-1] ${
                lang === "ar" ? "translate-x-1/2" : "-translate-x-1/2"
              } top-[90%] start-1/2`}
            />
            <div
              className={`absolute top-[110%] start-1/2 z-[50] ${
                lang === "ar" ? "translate-x-1/2" : "-translate-x-1/2"
              } h-0 overflow-hidden group-hover:h-[105px] group-hover:p-1 transition-all duration-500  rounded-lg  bg-two text-white`}
            >
              {Object.keys(langs).map((lang) =>
                i18n.resolvedLanguage === lang ? null : (
                  <button
                    key={lang}
                    onClick={() => {
                      i18n.changeLanguage(lang);
                      setLang(lang);
                      document
                        .getElementsByTagName("html")[0]
                        .setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
                      console.log(lang);
                    }}
                    className="p-1  disabled:bg-gray-100 disabled: w-full hover:opacity-90 transition-all duration-100 hover:scale-105"
                  >
                    {langs[lang].nativeName}
                  </button>
                )
              )}
            </div>
          </div>
          {user ? (
            <div
              className="cursor-pointer w-[45px] h-[45px] rounded-full"
              onClick={() => navigate("/profile")}
            >
              <LazyLoadImage
                src={user?.profile_file}
                alt="profile"
                className="w-full h-full rounded-full"
              />
            </div>
          ) : (
            <CustomButton
              title="login"
              onClick={() => navigate("/auth/login")}
            />
          )}
        </div>
      </div>
      {!isLg && (
        <div>
          <div
            className={`${
              isExpanded ? "h-[52px] py-2" : "h-0"
            } transition-all duration-500  overflow-hidden  dark:bg-darkbg1 border-t border-gray-500 `}
          >
            <NavList navData={navData} />
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
