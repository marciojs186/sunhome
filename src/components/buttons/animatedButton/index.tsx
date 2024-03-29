import styles from "./bt.module.scss";
export function Button({
  type = 1,
  text = "ACESSAR",
  width = 250 || "0",
  heigth = 58 || "0",
  fontSize = 18 || "22",
  marginLeft = 0 || "0",
  marginTop = 0 || "0",
  paddingLeft = 0 || "0",
  onClick = () => {},
}) {
  let renderButton = (
    <button className={styles.second} onClick={onClick}>
      Button 2
    </button>
  );

  switch (type) {
    case 1:
      renderButton = (
        <button
          className={styles.first}
          style={{
            width: width,
            height: heigth,
            alignSelf: "center",
            fontSize: fontSize,
            marginLeft: marginLeft,
            marginTop: marginTop,
            paddingLeft: paddingLeft,
          }}
          onClick={onClick}
        >
          {text}
        </button>
      );
      break;
    case 2:
      renderButton = (
        <button
          className={styles.second}
          style={{ width: width, height: heigth, alignSelf: "center" }}
          onClick={onClick}
        >
          {text}
        </button>
      );
      break;
    case 3:
      renderButton = (
        <button
          className={styles.third}
          style={{ width: width, height: heigth, alignSelf: "center" }}
          onClick={onClick}
        >
          {text}
        </button>
      );
      break;
    case 4:
      renderButton = (
        <button
          className={styles.fourth}
          style={{
            width: width,
            height: heigth,
            alignSelf: "center",
            marginLeft: marginLeft,
            marginTop: marginTop,
            paddingLeft: paddingLeft,
          }}
          onClick={onClick}
        >
          {text}
        </button>
      );
      break;
    case 5:
      renderButton = (
        <button
          className={styles.fifth}
          style={{
            width: width,
            height: heigth,
            alignSelf: "center",
            fontSize: fontSize,
            background: "transparent",
            marginLeft: marginLeft,
            marginTop: marginTop,
            paddingLeft: paddingLeft,
          }}
          onClick={onClick}
        >
          {text}
        </button>
      );
      break;
    case 6:
      renderButton = (
        <button
          className={styles.sixth}
          style={{ width: width, height: heigth, alignSelf: "center" }}
          onClick={onClick}
        >
          {text}
        </button>
      );
      break;
    case 7:
      renderButton = (
        <button
          className={styles.seven}
          style={{
            width: width,
            height: heigth,
            alignSelf: "center",
            fontSize: fontSize,
            background: "transparent",
            marginLeft: marginLeft,
            marginTop: marginTop,
            paddingLeft: paddingLeft,
          }}
          onClick={onClick}
        >
          {text}
        </button>
      );
      break;
  }
  return renderButton;
}
