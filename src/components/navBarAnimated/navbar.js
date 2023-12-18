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
          <h5 className={styles.li} onClick={() => Navigation("./")}>
            Google Reviews
          </h5>
          <h5 className={styles.li} onClick={() => Navigation("./orcamento")}>
            contato@sunhome.com.br
          </h5>
          <h5 className={styles.li} onClick={() => Navigation("./servicos")}>
            (11) 99999-9999
          </h5>
          <h5 className={styles.li} onClick={() => Navigation("./quemsomos")}>
            Whatsapp
          </h5>
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
