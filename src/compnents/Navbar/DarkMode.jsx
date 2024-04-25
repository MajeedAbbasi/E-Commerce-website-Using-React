import React, { useEffect } from "react";
import LightButton from "../../assets/Website/light-mode-button.png";
import DarkButton from "../../assets/Website/dark-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;
  console.log(element);
  useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === "dark") {
      element.classList.add("dark");
      element.classList.add("dark");
    } else {
      element.classList.remove("light");
      element.classList.remove("dark");
    }
  });
  return (
    <div className="relative">
      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={LightButton}
        alt=""
        className={`w-12 cursor-pointer absolute right-0 z-10  ${
          theme === "dark"
            ? "opacity-0"
            : "opacity-100 transition-all duration-400"
        }`}
      />
      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "light")}
        src={DarkButton}
        alt=""
        className={`w-12 cursor-pointer `}
      />
    </div>
  );
};

export default DarkMode;
