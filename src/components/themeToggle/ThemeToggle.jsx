"use client";

import React, { useContext } from "react";
import styles from "./themeToggle.module.css";
import Image from "next/image";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <div
      className={styles.container}
      onClick={toggle}
      style={
        theme === "dark"
          ? { background: "white" }
          : { background: "#0f172a" }
      }
    >
      <Image src="/moon.png" alt="" height={14} width={14} />
      <div
        className={styles.circle}
        style={
          theme === "dark"
            ? { left: 2, background: "#0f172a" }
            : { right: 2, background: "white" }
        }
      ></div>
      <Image src="/sun.png" alt="" height={14} width={14} />
    </div>
  );
};

export default ThemeToggle;
