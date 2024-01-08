import React from "react";

import CarouselList from "../../components/carouselList/carouselList";
import styles from "./depoimentos.module.scss";

export function Depoimentos() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.infoStyle}>
          <div className={styles.containerTitle}>
            <h2>AVALIAÇÕES E DEPOIMENTOS DE NOSSOS CLIENTES</h2>
            <hr style={{ width: "50%", color: "#FFF", borderWidth: 1 }} />
            <CarouselList />
          </div>
        </div>
      </div>
    </div>
  );
}
