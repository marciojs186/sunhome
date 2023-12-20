import React, { useState, useEffect } from "react";

import styles from "./App.module.scss";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

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
          <header
            id="navbar"
            className={`${
              theme === 2 ? styles.headerContainerB : styles.headerContainer
            }`}
          >
            <div>
              <h2>
                LOGO ----- AQUECEDOR PARA BANHO ----- AQUECEDOR PARA PISCINA
                ----- PRÉDIOS e CONDOMÍNIOS
              </h2>
            </div>
          </header>
          <div>
            <img
              src="/images/ImagesCarousel/eficiencia.jpg"
              alt="Satisfação"
              width={"100%"}
              height={"100%"}
            />
          </div>
          <div>
            <h3>Thema...</h3>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
