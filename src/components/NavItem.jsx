import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavItem = ({ item, setActiveOne, activeOne, refProp }) => {
  const { t } = useTranslation();
  return (
    <Link
      to={item.to}
      onClick={() => setActiveOne(item.idx)}
      ref={refProp || null}
      className={`relative md:min-w-[97px] flex-1 cursor-pointer hover:shadow-custom shadow-two rounded-xl text-sm sm:text-base  md:px-4 px-2 py-2 text-center transition-all duration-100 after:absolute after:bottom-0 after:transition-all after:duration-300 after:h-[2px] after:bg-blue-700 after:start-0 ${
        activeOne === item.idx ? "text-blue-700 after:w-full" : "after:w-0"
      } `}
    >
      {t(item?.title)}
    </Link>
  );
};

export default NavItem;
