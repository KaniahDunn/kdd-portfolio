import { useEffect, useState } from "react";
import Card from "./components/Card";
import Header from "./components/Header";
import DarkModeButton from "./components/DarkModeButton";

function App() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className='min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white flex flex-col items-center p-4'>
      <Header />
      <DarkModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className='mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-4xl'>
        <Card title={"Example Work"} />
        <Card title={"About Me"} />
        <Card title={"Contact Me"} />
      </div>
    </div>
  );
}

export default App;
