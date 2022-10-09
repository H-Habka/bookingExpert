import { useTranslation } from "react-i18next";

const TextWithUnderLineEffect = ({ onClick, title }) => {
  const { t } = useTranslation();
  return (
    <div data-aos="fade-up" data-aos-offset={-200} className="flex justify-end m-1 w-fit">
      <button
        type="button"
        onClick={onClick}
        className="relative after:absolute after:w-0 after:h-[1px] after:bg-four  hover:after:w-full after:transition-all after:duration-300 after:bottom-0 after:start-0  text-four"
      >
        {t(title)}
      </button>
    </div>
  );
};

export default TextWithUnderLineEffect;
