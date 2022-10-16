import { SpinnerDotted } from "spinners-react";
import { useTranslation } from "react-i18next";

const Spinner = ({ withText, size = 120, thickness = 150, speed = 80 }) => {
  const { t } = useTranslation();
  return (
    <div className=" flex flex-col  items-center justify-center h-[400px]">
      <SpinnerDotted
        size={size}
        thickness={thickness}
        speed={speed}
        color="#2289FF"
      />
      {withText && (
        <p className="mt-8 font-semibold text-2xl">{t("Loading")}...</p>
      )}
    </div>
  );
};

export default Spinner;
