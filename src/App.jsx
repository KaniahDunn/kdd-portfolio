import { useEffect, useState } from "react";
import { ThemeProvider } from "@material-tailwind/react";
import FeatureCard from "./components/FeatureCard";
import Hero from "./components/Hero";
import DarkModeButton from "./components/DarkModeButton";

export default function LandingPage() {
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

  const projects = [
    {
      name: "Task Manager App",
      link: "https://github.com/KaniahDunn/task-manager",
    },
    {
      name: "E-commerce Store",
      link: "https://github.com/KaniahDunn/ecommerce-store",
    },
    { name: "Weather App", link: "https://github.com/KaniahDunn/weather-app" },
  ];

  return (
    <ThemeProvider>
      <div className='min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-center p-8'>
        <div className='absolute top-4 right-4'>
          <DarkModeButton darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>

        <Hero />

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
          <FeatureCard
            title='My Work'
            description='Take a look at some of my past work'
            projectList={projects}
          />

          <FeatureCard
            title='About Me'
            description="I'm a mom, software engineer, and lifelong learner with a passion for reading and personal growth. When I'm not coding or working on exciting projects, you can usually find me curled up with my Kindle and my two boys, enjoying quality time together. Family is at the heart of everything I do, and I love finding new ways to learn, explore, and create."
            // buttonText='Get Started'
          />
          <FeatureCard
            title='Connect with Me'
            description="Follow me on social media and let's collaborate!"
            isSocialCard={true}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
