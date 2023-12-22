import React, { useState, useEffect } from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import Carousel from "react-bootstrap/Carousel";
import styles from "./carousel.module.scss";
import { AiFillRightSquare, AiFillLeftSquare } from "react-icons/ai";

export function Carossel() {
  const [theme, setTheme] = useState("");
  const [indice, setIndice] = useState(true);

  const nextIcon = (
    <span>
      <h1>
        <AiFillRightSquare size={70} />
      </h1>
    </span>
  );
  const prevIcon = (
    <span>
      <h1>
        <AiFillLeftSquare size={70} />
      </h1>
    </span>
  );

  useEffect(() => {
    setIndice(!indice);
    ResetValues();
  }, []);

  const ResetValues = () => {
    let i = !indice;
    setIndice(i);
    setTimeout(() => {
      if (i) {
        setTheme(styles.customImage);
      } else {
        setTheme(styles.imageBack);
      }
    }, 190);
  };

  return (
    <>
      <Carousel
        fade
        interval={8000}
        nextIcon={nextIcon}
        prevIcon={prevIcon}
        pause={false}
        indicators={false}
        onSelect={() => ResetValues()}
      >
        <Carousel.Item className={theme}>
          <div className="unset-img full-bleed">
            <img
              style={{ width: "100%", height: "100vh" }}
              src="/images/ImagesCarousel/checkplaca.jpg"
              alt="First slide"
            />
          </div>
          <Carousel.Caption className={styles.infoStyle}>
            <span>Excelência na Instalação</span>
            <p>
              Instaladores com mais de 20 anos de experiência em aquecimento
              solar e processos planejados para garantir bom funcionamento e
              segurança.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={theme}>
          <div className="unset-img full-bleed">
            <img
              style={{ width: "100%", height: "100vh" }}
              src="/images/ImagesCarousel/placahome.jpg"
              alt="Second slide"
            />
          </div>
          <Carousel.Caption className={styles.infoStyle}>
            <span>Atendimento em toda grande São Paulo</span>
            <p>Atendimento personalizado e com garantia de satisfação.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={theme}>
          <div className="unset-img full-bleed">
            <img
              style={{ width: "100%", height: "100vh" }}
              src="/images/ImagesCarousel/placatelhado.jpg"
              alt="Second slide"
            />
          </div>
          <Carousel.Caption className={styles.infoStyle}>
            <span>A quase 10 anos no mercado</span>
            <p>
              Confie em quem tem experiência no mercado e sempre oferece o
              melhor para seus clientes.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className={theme}>
          <div className="unset-img full-bleed">
            <img
              style={{ width: "100%", height: "100vh" }}
              src="/images/ImagesCarousel/placadetalhe.jpg"
              alt="Second slide"
            />
          </div>
          <Carousel.Caption className={styles.infoStyle}>
            <span>Clientes 100% satisfeito e felizes</span>
            <p>
              Uma equipe a disposição sempre que seu negócio precisar de um
              socorro.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
