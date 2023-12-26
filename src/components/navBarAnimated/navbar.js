/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import styles from "./navbar.module.scss";

export function NavbarAnimated({ marginLeft = 5, closeVisible }) {
  const Navigation = (url) => {
    setTimeout(() => {
      closeVisible(true);
      //Router.push(url);
    }, 500);
  };

  const [visibleList, setVisibleList] = useState(false)
  const [viewClose, setViewClose] =  useState(false)

  const closeView = () => {
    const time = visibleList ? 500 : 0
    setViewClose(!visibleList)
    console.log("TIME: ", time)
    setTimeout(() => {

      setVisibleList(!visibleList)
      
    }, time);
  }

  return (
    <>
      <div style={{ marginLeft: marginLeft }}>
        <ul className={styles.ul}>
          <h6 className={styles.li} onClick={() => Navigation("./")}>
            <img
              src="/images/google.svg"
              style={{
                marginTop: -1,
                marginLeft: -25,
                width: 18,
                height: 21,
                position: "absolute",
              }}
            />
            Google Reviews
          </h6>
          <h6 className={styles.li} style={{minWidth:250}} onClick={() => Navigation("./orcamento")}>
            <img
              src="/images/emailicon.svg"
              style={{
                marginTop: -1,
                marginLeft: -25,
                width: 18,
                height: 21,
                position: "absolute",
              }}
            />
            contato@solarhome.com.br
          </h6>
          <h6 className={styles.li} onClick={() => Navigation("./servicos")}>
            <img
              src="/images/icon-phone.png"
              style={{
                marginTop: 1,
                marginLeft: -27,
                width: 21,
                height: 21,
                position: "absolute",
              }}
            />
            (11) 9999-9999
          </h6>
          <h6 className={styles.li} onClick={() => Navigation("./servicos")}>
            <img
              src="/images/phone-mobile.svg"
              style={{
                marginTop: -1,
                marginLeft: -25,
                width: 21,
                height: 21,
                position: "absolute",
              }}
            />
            (11) 98085-1787
          </h6>
          <h6 className={styles.li} style={{minWidth:100}} onClick={() => Navigation("./quemsomos")}>
            <img
              src="/images/whatsapp-icon.svg"
              style={{
                marginTop: -1,
                marginLeft: -25,
                width: 19,
                height: 19,
                position: "absolute",
              }}
            />
            Whatsapp
          </h6>
          <div className={styles.li} style={{minWidth:35, marginRight: 20}}>
              <img
                src="/images/icon-phone.png"
                style={{
                  marginTop: -6.5,
                  padding: 4,
                  borderRadius: 8,
                  background: "white",
                  width: 31,
                  height: 30,
                  //marginLeft: 15,
                  position: "absolute",
                }}
              />
          </div>

          <h6 className={styles.li} onClick={() => Navigation("./quemsomos")}>
            <div className={styles.orca}>Pedir Orçamento</div>
          </h6>
          <div className={styles.listOptions} style={{marginLeft: '3rem'}} onClick={()=> closeView()}>
            <img
              src="/images/toogle.svg"
              style={{
                width: 33,
                height: 33,
              }}
            />
             <div className={ !viewClose ? styles.closeListAbout : styles.listAbout } hidden={!visibleList}>
              <h6 className={styles.listItens}>Sobre nós</h6>
              <h6 className={styles.listItens}>Fale conosco</h6>
              <h6 className={styles.listItens}>Fale conosco</h6>
              <h6 className={styles.listItens}>Fale conosco</h6>
              <h6 className={styles.listItens}>Fale conosco</h6>
              <h6 className={styles.listItens}>Fale conosco</h6>
             </div>
          </div>
        </ul>
      </div>
    </>
  );
}
