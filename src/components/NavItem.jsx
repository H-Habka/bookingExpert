import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NavItem = ({ item, setActiveOne, activeOne, refProp }) => {
  const {t} = useTranslation()
  return (
    <Link
      to={item.to}
      onClick={() => setActiveOne(item.idx)}
      ref={refProp || null}
      className={`flex-1 cursor-pointer hover:shadow-custom shadow-two rounded-xl text-sm sm:text-base  md:px-4 px-2 py-2 text-center transition-all duration-100 ${
        activeOne === item.idx ? "text-blue-700" : ""
      } `}
    >
      {t(item?.title)}
    </Link>
  );
};

export default NavItem;
