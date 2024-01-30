import React from "react";
import CarouselGroup from "../../components/carrouselGroup/carouselGroup";

import styles from "./obras.module.scss";

export function Obras() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.containerTitle}>
          <h2 className={styles.h2}>Nossas obras</h2>
          <hr style={{ width: "50%", color: "#FFF", borderWidth: 2 }} />
          <h5 className={styles.h5}>Confira algumas obras</h5>
        </div>
      </div>
      <div className={styles.containerSlider}>
        <CarouselGroup />
      </div>
    </div>
  );
}
