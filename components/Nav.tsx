"use client";

import { useLayoutEffect, useState } from "react";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import pkg from '@/package.json';

export const Nav = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useLayoutEffect(() => {
    const el = document.documentElement;

    if (el.classList.contains("dark")) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  const toggleDark = () => {
    const el = document.documentElement;
    el.classList.toggle("dark");
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div
      className={
        "px-4 py-2 flex items-center h-14 z-50 bg-card border-b border-border"
      }
    >
      <Button onClick={toggleDark} className="flex items-center space-x-2">
        <span>
          {isDarkMode ? (
            <Sun className={"size-4"} />
          ) : (
            <Moon className={"size-4"} />
          )}
        </span>
        <span>{isDarkMode ? "Light" : "Dark"} Mode</span>
      </Button>
    </div>
  );
};
