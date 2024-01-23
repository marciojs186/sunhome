import React, { useRef } from "react";

import { ButtonFixed } from "../../components/buttons/buttonFixed";
import { WhatsAppButton } from "../../components/buttons/whatsappButton";
import { Carossel } from "../../components/caroussel";
import { Footer } from "../../components/footer";
import { Header } from "../../components/header";
import { SubHeader } from "../../components/subHeader";
import { Orcamento } from "../orcamentos";
import { QuemSomos } from "../quemSomos";
import { Servicos } from "../servicos";
import { Obras } from "../obras";
import { ComoFunciona } from "../comoFunciona";
import { Depoimentos } from "../depoimentos";
import styles from "./home.module.scss";
import { ScrollToTopButton } from "../../components/buttonScrolTopScreen/buttonScrollTopScreen";

export function Home() {
  const sectionRef = useRef<HTMLDivElement>(null);

  function scrollToSection() {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <>
      <ButtonFixed
        type={5}
        width={188}
        heigth={35}
        fontSize={18}
        text={"Solicite Orçamento"}
        onClick={scrollToSection}
      />
      <div className="App">
        <Header data={scrollToSection} />
        <main className={styles.main}>
          <div className={styles.headerBase}>
            <div>
              <Carossel />
            </div>
          </div>
          <SubHeader />
          <div className={styles.titleLog}>
            <WhatsAppButton />
          </div>
        </main>
        <QuemSomos data={scrollToSection} />
        <Servicos />
        <div ref={sectionRef}>
          <Orcamento />
        </div>
        <Obras />
        <ComoFunciona />
        <Depoimentos />
      </div>
      <ScrollToTopButton />
      <Footer />
    </>
  );
}
