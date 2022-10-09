import {useTranslation} from 'react-i18next'

const TimeItem = ({ register, time, amount, error }) => {
  const {t} = useTranslation()
  const isSelected = time == amount;
  return (
    <label
      style={{
        boxShadow: isSelected
          ? "0px 0px 4px 0px blue"
          : error
          ? "0px 0px 4px 0px red"
          : "",
      }}
      className={`cursor-pointer hover:text-two rounded-lg border-2 hover:border-two px-4 py-2 ${
        isSelected
          ? "text-two border-two"
          : error
          ? "text-red-600 border-red-600"
          : "border-gray-500 "
      }`}
    >
      <p className="text-center">{amount} {t("Min")}</p>
      <input value={amount} type="radio" className="hidden" {...register} />
    </label>
  );
};

export default TimeItem;
