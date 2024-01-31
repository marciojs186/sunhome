/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { Button } from "../../components/buttons/animatedButton";
import styles from "./solucoes.module.scss";

import { Link } from "react-router-dom";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";
import { ScrollToTopButton } from "../../components/buttonScrolTopScreen/buttonScrollTopScreen";

type IProps = {
  data?: () => void;
};

export function Solucoes({ data }: IProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.container}>
      <Header />
      <Link to={"/"}>
        <div style={{ marginTop: -82 }}>
          <Button
            type={7}
            text={"Home"}
            fontSize={20}
            width={60}
            heigth={30}
            marginLeft={"8%"}
          />
        </div>
      </Link>
      <div className={styles.containerTitulo} style={{ marginTop: -30 }}>
        <h1 className={styles.h1}>Soluções ON-GRID</h1>
      </div>
      <hr
        style={{
          width: "69%",
          display: "flex",
          alignItems: "center",
          alignSelf: "center",
          color: "yellowgreen",
          justifyContent: "center",
        }}
      />
      <div className={styles.containerImg}>
        <img
          src="/images/sistema-on-grid.png"
          style={{
            width: "40%",
            padding: "1%",
          }}
        />
      </div>
      {/* #### */}
      <div
        className={styles.container}
        style={{ background: "rgb(72,99, 28)", marginTop: "-10%" }}
      >
        <div className={styles.containerTitulo}>
          <h1 className={styles.h2}>Soluções OFF-GRID</h1>
        </div>
        <hr
          style={{
            width: "69%",
            display: "flex",
            alignItems: "center",
            alignSelf: "center",
            color: "yellowgreen",
            justifyContent: "center",
          }}
        />
        <div className={styles.containerImg}>
          <img
            src="/images/sistema-off-grid.png"
            style={{
              width: "40%",
              padding: "1%",
              borderRadius: 10,
            }}
          />
        </div>
      </div>
      {/* ##### */}
      <div
        className={styles.container}
        style={{ background: " rgb(61, 65, 54)", marginTop: "-10%" }}
      >
        <div className={styles.containerTitulo}>
          <h1 className={styles.h1}>Soluções HÍBRIDO</h1>
        </div>
        <hr
          style={{
            width: "69%",
            display: "flex",
            alignItems: "center",
            alignSelf: "center",
            color: "yellowgreen",
            justifyContent: "center",
          }}
        />
        <div className={styles.containerImg}>
          <img
            src="/images/sistema-hibrido.png"
            style={{
              width: "40%",
              borderRadius: 10,
              padding: "1%",
            }}
          />
        </div>
      </div>
      <br />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}
