import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const ToggleIcon = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  };
  return (
    <div>
      {theme === "dark" ? (
        <MdLightMode onClick={toggleTheme} className="text-3xl cursor-pointer"/>
      ) : (
        <MdDarkMode onClick={toggleTheme} className="text-3xl cursor-pointer"/>
      )}
    </div>
  );
};

export default ToggleIcon;
