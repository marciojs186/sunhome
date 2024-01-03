import React, { useState, useEffect } from "react";

import styles from "./footer.module.scss";

export function Footer() {
  return (
    // <footer className={styles.footer}>
    //   <p>
    //     <span>React = TS Estudo</span> @ 2023
    //   </p>
    // </footer>
    <div className={styles.footerContainer}>
      <div className={styles.textContent}>
        <p>SOLAR META - ENERGIA LIMPA, ECONOMIA E CONFORTO.</p>
        <p>Fale conosco pelo Whatsapp.</p>
        <span>
          <div className={styles.imagem}>
            <img
              src={"/images/whatsApp.png"}
              alt={"WhatsApp"}
              width={25}
              height={25}
            />
          </div>
          11 98085-1787
        </span>
      </div>
      <footer className={styles.footer}>
        <p>&copy; SOLAR META Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
