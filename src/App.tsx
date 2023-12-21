import React, { useState, useEffect } from "react";

import styles from "./App.module.scss";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Carossel } from "./components/caroussel";

function App() {
  const [theme, setTheme] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 70;
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
              height={"80%"}
            />
            LOGO -- AQUECEDOR PARA BANHO -- AQUECEDOR PARA PISCINA -- PRÉDIOS e
            CONDOMÍNIOS
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
