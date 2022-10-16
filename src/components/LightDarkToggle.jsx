import { ReactComponent as SunIcon } from "../icons/sun.svg";
import { ReactComponent as MoonIcon } from "../icons/moon.svg";
import { useState} from "react";
import { useStore } from "../store";

const LightDarkToggle = ({ className }) => {
  const isDark = useStore((state) => state.isDark);
  const toggleMode = useStore((state) => state.toggleMode);

  const handleModeToggleClick = () => {
    toggleMode((prev) => !prev);
  };
  return (
    <div className="w-fit cursor-pointer" onClick={handleModeToggleClick}>
      {isDark ? (
        <MoonIcon className={className} fill="#777" color="#333" />
      ) : (
        <SunIcon className={className} fill="yellow" color="yellow" />
      )}
    </div>
  );
};

export default LightDarkToggle;
