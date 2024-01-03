import React, { useState } from "react";
import styles from "./input.module.scss";
import { MaskTel } from "./maskTel";

interface IInput {
  name?: string;
  placeholder?: string;
  width?: string | number;
  height?: string | number;
  marginTop?: string | number;
  marginBottom?: string | number;
  marginRight?: string | number;
  marginLeft?: string | number;
  type?: string;
}

export default function Input({
  name = "Nome",
  placeholder = "Digite seu nome.",
  width = 250 || "0",
  height = 50 || "0",
  marginTop = 0 || "0",
  marginBottom = 0 || "0",
  marginRight = 0 || "0",
  marginLeft = 0 || "0",
  type = "text",
}: IInput) {
  const [value, setValue] = useState("");

  const setValueInput = (arg: string) => {
    if (type === "tel") {
      const tel = MaskTel(arg);
      setValue(tel);
    } else {
      setValue(arg);
    }
  };

  return (
    <div
      className={styles.inputContainer}
      style={{
        width: width,
        height: height,
        marginTop: marginTop,
        marginBottom: marginBottom,
        marginLeft: marginLeft,
        marginRight: marginRight,
      }}
    >
      <input
        className={styles.textInput}
        placeholder={placeholder}
        value={value}
        type="text"
        autoComplete="off"
        onChange={(e) => setValueInput(e.target.value)}
      ></input>
      <label className={styles.label}>{name}</label>
    </div>
  );
}
