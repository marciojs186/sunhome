import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { NavbarAnimated } from "../navBarAnimated/navbar";

export function Header() {
  return (
    <>
      <header className={styles.headerContainer}>
        <NavbarAnimated closeVisible={() => {}} marginLeft={0} />
      </header>
    </>
  );
}
