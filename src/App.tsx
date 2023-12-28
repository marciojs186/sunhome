/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";

import styles from "./App.module.scss";
import { WhatsAppButton } from "./components/buttons/whatsappButton";
import { ButtonFixed } from "./components/buttons/buttonFixed";
import { Header } from "./components/header";
import { SubHeader } from "./components/subHeader";
import { Footer } from "./components/footer";
import { Carossel } from "./components/caroussel";
import { QuemSomos } from "./containers/quemSomos";
import { Servicos } from "./containers/servicos";
import { Orcamento } from "./containers/orcamentos";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <main className={styles.main}>
          <div className={styles.headerBase}>
            <div>
              <Carossel />
            </div>
          </div>
          <SubHeader />
          <div className={styles.titleLog}>
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
        <QuemSomos />
        <Servicos />
        <Orcamento />
      </div>
      <Footer />
    </>
  );
}

export default App;
