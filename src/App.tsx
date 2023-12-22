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
      const show = window.scrollY > 220;
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
            <img
              src="/images/placaEnergy.svg"
              //alt="Satisfação"
              width={"10%"}
              height={63}
            />
            <Button
              type={5}
              width={240}
              heigth={44}
              text={"Aquecedor para Banho"}
              onClick={() => alert("clicou")}
              marginLeft={"10%"}
            />
            <Button
              type={5}
              width={240}
              heigth={44}
              text={"Aquecedor para Piscina"}
              onClick={() => alert("clicou")}
              marginLeft={"90"}
            />
            <Button
              type={5}
              width={240}
              heigth={44}
              text={"Prédios e Condomínios"}
              onClick={() => alert("clicou")}
              marginLeft={"90"}
            />
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
        {/* <div>
          <h5>Themh7...</h5>
        </div> */}
      </div>
      <Footer />
    </>
  );
}

export default App;
