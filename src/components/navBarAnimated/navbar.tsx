/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import styles from "./navbar.module.scss";

import { Link } from "react-router-dom";

type IProps = {
  marginLeft?: number;
  data?: () => void;
};

export function NavbarAnimated({ marginLeft = 5, data }: IProps) {
  const [visibleList, setVisibleList] = useState(false);
  const [viewClose, setViewClose] = useState(false);

  const closeView = () => {
    const time = visibleList ? 400 : 0;
    setViewClose(!visibleList);
    console.log("TIME: ", time);
    setTimeout(() => {
      setVisibleList(!visibleList);
    }, time);
  };

  let url = "https://api.whatsapp.com/send?phone=5511986797419";

  const goToWhats = () => {
    window.open(url);
  };

  return (
    <div style={{ marginLeft: marginLeft }}>
      <ul className={styles.ul}>
        <h6 className={styles.li} onClick={() => {}}>
          <img
            src="/images/googleWhite.svg"
            style={{
              marginTop: -0.3,
              marginLeft: -25,
              width: 16,
              height: 19,
              position: "absolute",
            }}
          />
          Google Reviews
        </h6>
        <h6 className={styles.li} style={{ minWidth: 220 }} onClick={() => {}}>
          <img
            src="/images/emailBranco.svg"
            style={{
              marginTop: -1,
              marginLeft: -25,
              width: 19,
              height: 21,
              position: "absolute",
            }}
          />
          contato@solarmeta.com.br
        </h6>
        <Link to={"/Solucoes"} style={{ color: "transparent" }}>
          <h6 className={styles.li}>
            <img
              src="/images/solucao_placa.svg"
              style={{
                marginTop: -1,
                marginLeft: -29,
                width: 21,
                height: 20,
                position: "absolute",
              }}
            />
            Soluções
          </h6>
        </Link>
        <h6 className={styles.li} style={{ minWidth: 100 }} onClick={goToWhats}>
          <img
            src="/images/whatWhite.svg"
            style={{
              marginTop: -1,
              marginLeft: -26,
              width: 20,
              height: 20,
              position: "absolute",
            }}
          />
          Whatsapp
        </h6>
        <div className={styles.li} style={{ minWidth: 35, marginRight: 20 }}>
          <img
            src="/images/icon-phone.png"
            style={{
              marginTop: -6.5,
              padding: 4,
              borderRadius: 8,
              background: "white",
              width: 31,
              height: 30,
              position: "absolute",
            }}
          />
        </div>

        <h6 className={styles.li} onClick={data}>
          <div className={styles.orcamento}> Pedir Orçamento</div>
        </h6>
        <div
          className={styles.listOptions}
          style={{ marginLeft: "3rem" }}
          onClick={() => closeView()}
        >
          <img
            src="/images/toogle.svg"
            style={{
              width: 33,
              height: 33,
            }}
          />
          <div
            className={!viewClose ? styles.closeListAbout : styles.listAbout}
            hidden={!visibleList}
          >
            <h6 className={styles.listItens}>Sobre nós</h6>
            <h6 className={styles.listItens}>Fale conosco</h6>
            <h6 className={styles.listItens}>Fale conosco</h6>
            <h6 className={styles.listItens}>Fale conosco</h6>
            <h6 className={styles.listItens}>Fale conosco</h6>
          </div>
        </div>
      </ul>
    </div>
  );
}
