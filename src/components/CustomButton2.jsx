import { useTranslation } from "react-i18next";
import Loader from "./Loader";

const CustomButton2 = ({
  type = "submit",
  title,
  className,
  disabled,
  onClick,
}) => {
  const { t } = useTranslation();
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${className} ${
        disabled
          ? "text-gray-600"
          : "text-white hover:text-four hover:bg-white dark:hover:bg-darkbg1"
      } sm:text-lg md:text-xl  bg-four border-2 border-four rounded-lg w-full py-2    transition-all duration-300`}
    >
      {disabled ? <Loader /> : t(title)}
    </button>
  );
};

export default CustomButton2;
