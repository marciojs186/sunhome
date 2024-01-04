import React from "react";

import { Button } from "../../components/buttons/animatedButton";
import styles from "./comoFunciona.module.scss";

export function ComoFunciona() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.infoStyle}>
          <div className={styles.containerTitle}>
            <h2>Como funciona a energia solar?</h2>
            <hr style={{ width: "50%", color: "#FFF", borderWidth: 1 }} />
          </div>
          <div className={styles.containerSubTitle}>
            <h3>
              A energia solar fotovoltaica é a energia obtida da conversão
              direta da luz em eletricidade. Isso é possível graças as chamadas
              células fotovoltaicas, componente dos painéis solares (placa solar
              de silício).
            </h3>
          </div>
        </div>
        <div className={styles.containerButton}>
          <Button type={4} text={"Confira mais"} heigth={45} width={180} />
        </div>
      </div>
    </div>
  );
}
