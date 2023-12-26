/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";

import styles from "./App.module.scss";
import { Button } from "./components/buttons/animatedButton";
import { WhatsAppButton } from "./components/buttons/whatsappButton";
import { ButtonFixed } from "./components/buttons/buttonFixed";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Carossel } from "./components/caroussel";

function App() {
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
    <>
      <div className="App">
        <Header />
        <main className={styles.main}>
          <div className={styles.headerContainer}>
            <div>
              <Carossel />
            </div>
          </div>
          <header
            id="navbar"
            className={`${
              theme === 2 ? styles.headerContainerB : styles.headerContainer
            }`}
          ></header>
          <div className={styles.titleLog}>
            <div className={styles.containerButton}>
              <img
                src="/images/solar-meta.png"
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
                //marginLeft={"90"}
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
                // marginLeft={"90"}
              />
            </div>
            <WhatsAppButton />
            <ButtonFixed
              type={5}
              width={188}
              heigth={35}
              fontSize={18}
              text={"Solicite Orçamento"}
              onClick={() => alert("clicou")}
            />
          </div>
        </main>
        <div className={styles.containerOrcamento}>
          <h5>Orçamento...</h5>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
