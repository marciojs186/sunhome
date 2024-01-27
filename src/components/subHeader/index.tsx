/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { Button } from "../buttons/animatedButton";

import styles from "./subheader.module.scss";

export function SubHeader() {
  const [theme, setTheme] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 320;
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
    <header
      id="navbar"
      className={`${
        theme === 2 ? styles.headerContainerB : styles.headerContainer
      }`}
    >
      <div className={styles.headerContainer}>
        <div className={styles.containerButton}>
          <img
            src="/images/solar-meta_text_black.png"
            alt="Satisfação"
            width={"11%"}
          />
          <img
            src="/images/banho.svg"
            style={{
              marginTop: "2.4%",
              marginLeft: "12.5%",
              width: 22,
              height: 22,
              position: "absolute",
              zIndex: 3,
            }}
          />
          <Button
            type={5}
            width={240}
            heigth={44}
            text={"Aquecedor para Banho"}
            onClick={() => alert("clicou")}
            marginLeft={"12%"}
            paddingLeft={"1.4%"}
          />
          <img
            src="/images/piscina.svg"
            style={{
              marginTop: "2.5%",
              marginLeft: 8,
              width: 23,
              height: 21,
              position: "absolute",
              zIndex: 3,
            }}
          />
          <Button
            type={5}
            width={240}
            heigth={44}
            text={"Aquecedor para Piscina"}
            onClick={() => alert("clicou")}
            paddingLeft={"1.4%"}
          />
          <img
            src="/images/predio.svg"
            style={{
              marginTop: "2.5%",
              marginLeft: 9,
              width: 24,
              height: 19,
              position: "absolute",
              zIndex: 3,
            }}
          />
          <Button
            type={5}
            width={240}
            heigth={44}
            text={"Prédios e Condomínios"}
            onClick={() => alert("clicou")}
            paddingLeft={"1.4%"}
          />
        </div>
      </div>
    </header>
  );
}
