"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    if (!isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="bg-gray-800 dark:bg-gray-100 text-gray-200 dark:text-gray-800 py-4 fixed top-0 w-full z-10 shadow-md">
      <nav className="container mx-auto flex justify-around items-center">
        <Link href="/">홈</Link>
        <Link href="/champions">챔피언 목록</Link>
        <Link href="/items">아이템 목록</Link>
        <Link href="/rotation">챔피언 로테이션</Link>
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full bg-gray-700 dark:bg-gray-100 text-gray-100 dark:text-gray-800 hover:bg-gray-600 dark:hover:bg-gray-200"
          aria-label="Toggle Dark Mode"
        >
          {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
        </button>
      </nav>
    </header>
  );
};

export default Header;
