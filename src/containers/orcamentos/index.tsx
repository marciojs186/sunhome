import React, { useState, useEffect } from "react";

import styles from "./orcamento.module.scss";

export function Orcamento() {
  return (
    <div className={styles.container}>
      <div className={styles.containerTitle}>
        <div className={styles.infoStyle}>
          <span>Container Orçamento</span>
          <hr style={{ width: "100%", color: "#FFF" }} />
          <p>Preencha os campos</p>
        </div>
      </div>
    </div>
  );
}
