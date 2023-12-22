import styles from "./navbar.module.scss";

export function NavbarAnimated({ marginLeft = 5, closeVisible }) {
  const Navigation = (url) => {
    setTimeout(() => {
      closeVisible(true);
      //Router.push(url);
    }, 500);
  };

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
          <h6 className={styles.li} onClick={() => Navigation("./orcamento")}>
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
            contato@sunhome.com.br
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
            (11) 99999-9999
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
            (11) 9999-9999
          </h6>
          <h6 className={styles.li} onClick={() => Navigation("./quemsomos")}>
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
          <div className={styles.li}>
            <div>
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
          </div>

          <h6 className={styles.li} onClick={() => Navigation("./quemsomos")}>
            <div className={styles.orca}>Pedir Orçamento</div>
          </h6>
          <div className={styles.li}>
            <img
              src="/images/toogle.svg"
              style={{
                marginTop: "-18%",
                width: 33,
                height: 33,
              }}
            />
          </div>
        </ul>
      </div>
    </>
  );
}
