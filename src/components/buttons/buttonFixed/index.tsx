import styles from "./styles.module.scss";
export function ButtonFixed({
  type = 1,
  text = "ACESSAR",
  width = 250 || "0",
  heigth = 58 || "0",
  fontSize = 18 || "22",
  marginLeft = 0 || "0",
  marginRight = 0 || "0",
  left = 0 || "0",
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
            marginRight: marginRight,
            left: left,
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
            marginLeft: marginLeft,
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
  }
  return renderButton;
}
