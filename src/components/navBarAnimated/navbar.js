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
          <img
            src="/images/GoogleIcon.png"
            style={{
              marginLeft: -58,

              //display: "flex",
              marginTop: "4.1%",
              //background: "red",
              width: "1.7%",
              height: "16%",
              //position: "absolute",
              //right: "83%",
            }}
          />

          <h5 className={styles.li} onClick={() => Navigation("./")}>
            Google Reviews
          </h5>
          <img
            src="/images/email-icon.png"
            style={{
              marginTop: "4.2%",
              //background: "red",
              width: "1.7%",
              height: "15%",
              //position: "absolute",
              //right: "83%",
            }}
          />
          <h5 className={styles.li} onClick={() => Navigation("./orcamento")}>
            contato@sunhome.com.br
          </h5>
          <img
            src="/images/phone.png"
            style={{
              marginTop: "3.9%",
              //background: "red",
              width: "2.2%",
              height: "19%",
              //position: "absolute",
              //right: "83%",
            }}
          />
          <h5 className={styles.li} onClick={() => Navigation("./servicos")}>
            (11) 99999-9999
          </h5>
          <img
            src="/images/whatsapp-icon.svg"
            style={{
              marginTop: "3.9%",
              //background: "red",
              width: "2%",
              height: "19%",
              //right: "83%",
            }}
          />
          <h5 className={styles.li} onClick={() => Navigation("./quemsomos")}>
            Whatsapp
          </h5>
          <div className={styles.li}>
            <img
              src="/images/icon-phone.png"
              style={{
                marginTop: "6.8%",
                background: "white",
                marginLeft: 5,
                borderRadius: 7,
                //background: "red",
                width: "32.5%",
                height: "25%",
                //right: "83%",
              }}
            />
          </div>

          <h5 className={styles.li} onClick={() => Navigation("./quemsomos")}>
            Pedir Orçamento
          </h5>
          <h5 className={styles.li} onClick={() => Navigation("./quemsomos")}>
            Hamburguer
          </h5>
        </ul>
      </div>
    </>
  );
}
