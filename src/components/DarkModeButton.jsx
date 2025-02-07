function DarkModeButton({ darkMode, setDarkMode }) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className='absolute top-4 right-4 px-4 py-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded shadow'
    >
      Toggle Dark Mode
    </button>
  );
}

export default DarkModeButton;

