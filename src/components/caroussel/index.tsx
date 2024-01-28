import React, { useState, useEffect } from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import Carousel from "react-bootstrap/Carousel";
import styles from "./carousel.module.scss";
import { AiFillRightSquare, AiFillLeftSquare } from "react-icons/ai";
import { GetImagesCarousel } from "./api/getImages";

export function Carossel() {
  const [theme, setTheme] = useState("");
  const [indice, setIndice] = useState(true);
  const [data, setData] = useState<ICarousel[]>();

  const getImages = async () => {
    const dados = await GetImagesCarousel();
    setData(dados);
    console.log("Data resposta: ", dados);
  };
  interface ICarousel {
    _id: string;
    title: string;
    subtitle: string;
    img_id: string;
    imageName: string;
    imagelink: string;
  }

  useEffect(() => {
    getImages();
  }, []);

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
        {data?.map((item) => (
          <Carousel.Item key={item._id} className={theme}>
            <div className="unset-img full-bleed">
              <img
                style={{ width: "100%", height: "89vh" }}
                src={item.imagelink}
                alt="Carousel Slide"
              />
            </div>
            <Carousel.Caption className={styles.infoStyle}>
              <span>{item.title}</span>
              <p>{item.subtitle}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
}
