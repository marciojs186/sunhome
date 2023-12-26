import React, { useState, useEffect } from "react";

import styles from "./quemsomos.module.scss";

export function QuemSomos() {
  return (
    <div className={styles.container}>
      <h1>Tela quem somos</h1>
      <img
        src="/images/ImagesCarousel/placadetalhe.jpg"
        style={{
          // marginTop: "2.4%",
          // marginLeft: "12.5%",
          width: "60vh",
          height: "40vh",
          background: "red",
          position: "absolute",
        }}
      />
    </div>
  );
}
