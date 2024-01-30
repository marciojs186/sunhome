/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { Button } from "../../components/buttons/animatedButton";
import { ButtonFixed } from "../../components/buttons/buttonFixed";
import styles from "./solucoes.module.scss";

import { Link } from "react-router-dom";

type IProps = {
  data?: () => void;
};

export function Solucoes({ data }: IProps) {
  return (
    <div className={styles.container}>
      <div className={styles.containerImg}>
        <img
          src="/images/grid_hibrido.png"
          style={{
            width: "50%",
            //height: "55vh",
            borderRadius: 10,
            position: "absolute",
            //left: "19%",
            top: "5%",
          }}
        />
      </div>
    </div>
  );
}
