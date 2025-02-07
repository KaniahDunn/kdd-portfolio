import { Button } from "@material-tailwind/react";

export default function DarkModeButton({ darkMode, setDarkMode }) {
  return (
    <Button
      color={darkMode ? "light-blue" : "blue"}
      onClick={() => setDarkMode(!darkMode)}
      className={`border border-gray-300 dark:border-gray-600 
                  ${darkMode ? "text-white" : "text-black"} 
                  px-6 py-3 rounded-lg font-semibold shadow-md 
                  transition duration-300 ease-in-out transform hover:scale-105`}
    >
      {darkMode ? "Light Mode" : "Dark Mode"}
    </Button>
  );
}
