/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";

import Input from "../../components/input";
import { Button } from "../../components/buttons/animatedButton";
import styles from "./orcamento.module.scss";

export function Orcamento() {
  const [text, setText] = useState("");

  return (
    <div className={styles.container}>
      <div className={styles.leftContent}>
        <img
          src="/images/solar-meta.png"
          style={{
            width: "40%",
            position: "relative",
            top: 48,
            left: "-15%",
          }}
        />
        <h5 className={styles.h5}>Energia que dá volts!</h5>
        <h1 className={styles.h1}>Soluções em energia solar!</h1>
        <hr style={{ width: "50%", color: "#FFF" }} />
        <h6 className={styles.h6}>Energia Limpa, Economia e Conforto</h6>
      </div>
      <div className={styles.containerTitle}>
        <div className={styles.infoStyle}>
          <div className={styles.backgroundInput}>
            <span>Solicite um orçamento</span>
            <hr
              style={{
                width: "100%",
                color: "rgb(72, 99, 28)",
                borderWidth: 2,
              }}
            />

            <p>Faça seu orçamento sem compromisso</p>

            <Input
              type={"Name"}
              placeholder={"Digite seu nome"}
              name={"Nome"}
              width={350}
              height={40}
            />
            <br />
            <Input
              placeholder={"Insira seu e-mail"}
              name={"Email"}
              width={350}
              height={40}
            />
            <br />
            <Input
              type={"tel"}
              placeholder={"Digite seu telefone"}
              name={"Telefone"}
              width={350}
              height={40}
            />
            <br />
            <div className={styles.containerRowInput}>
              <Input
                placeholder={"Insira sua cidade"}
                name={"Cidade"}
                width={230}
                height={40}
              />
              <Input
                placeholder={"Estado"}
                name={"Estado"}
                width={100}
                height={40}
              />
            </div>
            <br />
            <Input
              height={130}
              placeholder={"Resumo"}
              name={"Observações"}
              width={350}
            />
            <Button
              type={4}
              marginTop={"5.5%"}
              heigth={45}
              width={350}
              text={"Pedir Orçamento"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
