import { ReactComponent as SunIcon } from "../icons/sun.svg";
import { ReactComponent as MoonIcon } from "../icons/moon.svg";
import { useState} from "react";
import { useStore } from "../store";

const LightDarkToggle = ({ size }) => {
  const isDark = useStore((state) => state.isDark);
  const toggleMode = useStore((state) => state.toggleMode);

  const handleModeToggleClick = () => {
    toggleMode((prev) => !prev);
  };
  return (
    <div className="w-fit cursor-pointer" onClick={handleModeToggleClick}>
      {isDark ? (
        <MoonIcon width={size} height={size} fill="#777" color="#333" />
      ) : (
        <SunIcon width={size} height={size} fill="yellow" color="yellow" />
      )}
    </div>
  );
};

export default LightDarkToggle;
