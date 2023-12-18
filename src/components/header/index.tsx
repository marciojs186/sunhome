import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { NavbarAnimated } from "../navBarAnimated/navbar";

export function Header() {
  const [theme, setTheme] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 100;
      if (show) {
        setTheme(2);
      } else {
        setTheme(1);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={styles.headerContainer}>
        {/* <header
        id="navbar"
        className={`${
          theme === 2 ? styles.headerContainerB : styles.headerContainer
        }`}
      > */}
        <NavbarAnimated closeVisible={() => {}} marginLeft={0} />
      </header>
    </>
  );
}
