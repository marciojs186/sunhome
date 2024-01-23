import React, { useState, useEffect } from "react";
import styles from "./styles.module.scss";
import { NavbarAnimated } from "../navBarAnimated/navbar";

type IProps = {
  data?: () => void;
};

export function Header({ data }: IProps) {
  return (
    <>
      <header className={styles.headerContainer}>
        <NavbarAnimated marginLeft={0} data={data} />
      </header>
    </>
  );
}
