/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { Button } from "../../components/buttons/animatedButton";
import { ButtonFixed } from "../../components/buttons/buttonFixed";
import styles from "./quemsomos.module.scss";

export function QuemSomos() {
  return (
    <div className={styles.container}>
      <div className={styles.containerTitulo}>
        <h1 className={styles.h1}>QUEM</h1>
        <h1 className={styles.h1}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;SOMOS</h1>
        <hr style={{ width: 150, color: "#FFF" }} />
      </div>
      <div className={styles.containerImg}>
        <img
          src="/images/ImagesCarousel/placadetalhe.jpg"
          style={{
            width: "50vh",
            height: "35vh",
            borderRadius: 10,
            position: "absolute",
            left: "18%",
          }}
        />
        <img
          src="/images/logoinsta.png"
          style={{
            width: "10vh",
            height: "10vh",
            borderRadius: 10,
            position: "relative",
            //top: "39%",
            top: "25vh",
            //left: "75%",
            left: "171%",
          }}
        />
      </div>
      <div className={styles.containerTitle}>
        <div className={styles.infoStyle}>
          <span>SOLAR META</span>
          <hr style={{ width: "18%", color: "#FFF" }} />
          <p>
            Empresa Paulistana com as melhores soluções em Energia Solar
            fotovoltaica. Soluções Sustentáveis e Eficientes em Geração de
            Energia pra você garantir economia e sustentabilidade.
            <br />
            <br />
            Conte Conosco Para fazer o seu projeto Seja em sua Residência,
            Empresa ou Propriedade Rural. Contate-nos e Garanta sua Economia.
          </p>
          <Button type={4} heigth={45} width={200} text={"Confira mais"} />
        </div>
      </div>
      <div className={styles.contentOrcamento}>
        <div className={styles.titleOrca}>
          <h2>Solicite um orçamento</h2>
          <h5 className={styles.h5}>Energia que dá volts!</h5>
          <div className={styles.buttonOrca}>
            <ButtonFixed
              type={4}
              width={150}
              heigth={42}
              marginLeft={"80%"}
              text={"Orçamento"}
            />
          </div>
        </div>
        <img
          src="/images/painelSol.jpg"
          style={{
            width: "62%",
            borderRadius: 25,
            position: "absolute",
            left: "19.4%",
          }}
        />
      </div>
    </div>
  );
}
