/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";

import styles from "./servicos.module.scss";

export function Servicos() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={styles.container}>
      <div className={styles.containerTitle}>
        <div className={styles.infoStyle}>
          <h1 className={styles.h1}>Nossos serviços</h1>
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
            <h2 className={styles.h2} style={{ color: "rgb(61, 65, 54)" }}>
              Instalação
            </h2>
            <h5 style={{ color: "rgb(61, 65, 54)" }}>
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
            <h2 className={styles.h2} style={{ color: "rgb(61, 65, 54)" }}>
              Homologação
            </h2>
            <h5 style={{ color: "rgb(61, 65, 54)" }}>
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
            <h2 className={styles.h2} style={{ color: "rgb(61, 65, 54)" }}>
              Projeto
            </h2>
            <h5 style={{ color: "rgb(61, 65, 54)" }}>
              Elaboramos um projeto único e customizado para atender as suas
              necessidades.
            </h5>
          </div>
        </div>
        <div className={styles.infoStyle}>
          <br />

          <h1 className={styles.h1}>Soluções</h1>
          <hr style={{ width: "100%", color: "#FFF" }} />
        </div>
        <div className={styles.containerGrid}>
          <div className={styles.servicoGrid}>
            <img
              src="/images/option_on-grid.png"
              style={{
                width: 330,
                height: 330,
                padding: 6,
                borderRadius: 30,
              }}
            />
          </div>
          <div className={styles.servicoGrid}>
            <img
              src="/images/option_off-grid.png"
              style={{
                width: 330,
                height: 330,
                padding: 6,
                borderRadius: 30,
              }}
            />
          </div>
          <div className={styles.servicoGrid}>
            <img
              src="/images/option_hibrido.png"
              style={{
                width: 330,
                height: 330,
                padding: 6,
                borderRadius: 30,
              }}
            />
          </div>
        </div>
        <div className={styles.valores}>
          <div
            style={{
              width: 320,
              height: 50,

              background: "yellowgreen",
            }}
          >
            <div className={styles.containerValores}>
              <img
                src="/images/ecologic-light.svg"
                alt="Satisfação"
                width={"9%"}
                style={{
                  paddingBottom: 10,
                }}
              />
              <h6 style={{ marginLeft: 60, paddingTop: 5 }}>On-Grid</h6>
            </div>
            <div
              style={{
                height: "auto",
                marginTop: "5%",
                padding: "2%",
                color: "rgba(211, 199, 199)",
              }}
            >
              <h6>
                No sistema ON-GRID, ou Grid-tie, ou sistema conectado a rede,
                geramos energia elétrica e consumimos no mesmo momento ou em
                caso de geração superior ao consumo, retornamos(injetamos) essa
                energia excedida a rede, o qual gera créditos para que se
                compense futuramente.
              </h6>
            </div>
          </div>
          <div
            style={{
              width: 320,
              height: 50,
              marginLeft: "10rem",
              marginRight: "5rem",
              background: "yellowgreen",
            }}
          >
            <div className={styles.containerValores}>
              <img
                src="/images/star_icon.svg"
                alt="Satisfação"
                width={"10%"}
                style={{
                  paddingBottom: 10,
                }}
              />
              <h6 style={{ marginLeft: 60, paddingTop: 5 }}>Off-Grid</h6>
            </div>
            <div
              style={{
                height: "auto",
                marginTop: "5%",
                padding: "2%",
                color: "rgba(211, 199, 199)",
              }}
            >
              <h6>
                No sistema de energia fotovoltaica OFF-GRID, ou sistema
                desconectado a rede, geramos energia elétrica e consumimos no
                mesmo momento ou em caso de geração superior ao consumo,
                retornamos (injetamos) essa energia excedida a um banco de
                baterias, o qual nos fornece energia no momento em que não há
                geração de energia.
              </h6>
            </div>
          </div>
          <div
            style={{
              width: 320,
              height: 50,
              marginLeft: "5rem",
              background: "yellowgreen",
            }}
          >
            <div className={styles.containerValores}>
              <img
                src="/images/star_icon.svg"
                alt="Satisfação"
                width={"10%"}
                style={{
                  paddingBottom: 10,
                }}
              />
              <h6 style={{ marginLeft: 60, paddingTop: 5 }}>Sistema Híbrido</h6>
            </div>
            <div
              style={{
                height: "auto",
                marginTop: "5%",
                padding: "2%",
                color: "rgba(211, 199, 199)",
              }}
            >
              <h6>
                No sistema de energia fotovoltaica HÍBRIDO, geramos energia
                elétrica e consumimos no mesmo momento ou em caso de geração
                superior ao consumo, retornamos (injetamos) essa energia
                excedida a rede, o qual gera créditos para que se compense
                futuramente, porem há também uma fonte de armazenamento, como as
                baterias para caso haja a falta de energia da concessionária.
              </h6>
            </div>
          </div>
        </div>
        <div className={styles.usina}>
          <img
            src="/images/you_usinaSolar.png"
            alt="Satisfação"
            width={900}
            height={218}
            style={{ marginTop: "8%", marginBottom: "3%", borderRadius: 3 }}
          />
        </div>
      </div>
    </div>
  );
}
