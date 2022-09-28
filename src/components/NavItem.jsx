import { Link } from "react-router-dom";

const NavItem = ({ item, setActiveOne, activeOne, refProp }) => {
  return (
    <Link
      to={item.to}
      onClick={() => setActiveOne(item.idx)}
      ref={refProp || null}
      className={`flex-1 cursor-pointer hover:shadow-custom shadow-two rounded-xl text-sm sm:text-base  md:px-4 px-2 py-2 text-center transition-all duration-100 ${
        activeOne === item.idx ? "text-blue-700" : ""
      } `}
    >
      {item?.title}
    </Link>
  );
};

export default NavItem;
