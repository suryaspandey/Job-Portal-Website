import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun } from "lucide-react";

export const ToggleTheme = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      className="absolute  z-40 top-4 right-16 md:right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition-colors"
      onClick={toggleTheme}
    >
      {theme === "dark" ? <Moon /> : <Sun />}
    </button>
  );
};

export default ToggleTheme;
