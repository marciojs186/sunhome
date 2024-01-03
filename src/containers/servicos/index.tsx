/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";

import styles from "./servicos.module.scss";

export function Servicos() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.containerTitle}>
        <div className={styles.infoStyle}>
          <span>Nossos serviços</span>
          <hr style={{ width: "100%", color: "#FFF" }} />
          <p>Confira nossos serviços</p>
        </div>
        <div className={styles.containerServicos}>
          <div className={styles.servico}>
            <div
              className={`svgcontainer ${isHovered ? "hovered" : ""}`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img
                src="/images/placainstalar.svg"
                style={{
                  width: 73,
                  height: 73,
                  marginTop: 30,
                }}
              />
            </div>
            <h2 className={styles.h2}>Instalação</h2>
            <h5>
              Instalamos o seu sistema usando os melhores equipamentos do
              mercado.
            </h5>
          </div>
          <div className={styles.servico}>
            <img
              src="/images/profileDoc.svg"
              style={{
                width: 73,
                height: 73,
                marginTop: 30,
              }}
            />
            <h2 className={styles.h2}>Homologação</h2>
            <h5>
              Cuidamos de todo o processo de legalização junto à distribuidora.
              Sem dor de cabeça para você!
            </h5>
          </div>
          <div className={styles.servico}>
            <img
              src="/images/doc.svg"
              style={{
                width: 65,
                height: 72,
                marginTop: 30,
              }}
            />
            <h2 className={styles.h2}>Projeto</h2>
            <h5>
              Elaboramos um projeto único e customizado para atender as suas
              necessidades.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
}
