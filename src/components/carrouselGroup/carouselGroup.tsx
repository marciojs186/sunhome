import { useState } from "react";
import Carousel from "react-bootstrap/esm/Carousel";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Button } from "../buttons/animatedButton";
import styles from "./carrousselGroup.module.scss";

function CarouselGroup() {
  const [indice, setIndice] = useState(true);
  const [theme, setTheme] = useState<string>("");

  let imagesList = [
    [
      {
        src: "/images/ImagesCarousel/placadetalhe.jpg",
        title: "RESIDENCIAL",
        subtitle: "Projeto Fotovoltaico de 8 KWp",
        cidade: "São Paulo - SP",
      },
      {
        src: "/images/ImagesCarousel/checkplaca.jpg",
        title: "RESIDENCIAL",
        subtitle: "Projeto Fotovoltaico de 8 KWp",
        cidade: "São Paulo - SP",
      },
      {
        src: "/images/ImagesCarousel/placadetalhe.jpg",
        title: "RESIDENCIAL",
        subtitle: "Projeto Fotovoltaico de 8 KWp",
        cidade: "São Paulo - SP",
      },
    ],
    [
      {
        src: "/images/ImagesCarousel/checkplaca.jpg",
        title: "FAZENDA",
        subtitle: "Projeto Fotovoltaico de 11 KWp",
        cidade: "Rio de Janeiro - RJ",
      },
      {
        src: "/images/ImagesCarousel/placahome.jpg",
        title: "FAZENDA",
        subtitle: "Projeto Fotovoltaico de 11 KWp",
        cidade: "Rio de Janeiro - RJ",
      },
      {
        src: "/images/ImagesCarousel/placadetalhe.jpg",
        title: "FAZENDA",
        subtitle: "Projeto Fotovoltaico de 11 KWp",
        cidade: "Rio de Janeiro - RJ",
      },
    ],
    [
      {
        src: "/images/ImagesCarousel/placadetalhe.jpg",
        title: "RESIDENCIAL",
        subtitle: "Projeto Fotovoltaico de 42 KWp",
        cidade: "Minas Gerais - MG",
      },
      {
        src: "/images/ImagesCarousel/checkplaca.jpg",
        title: "RESIDENCIAL",
        subtitle: "Projeto Fotovoltaico de 42 KWp",
        cidade: "Minas Gerais - MG",
      },
      {
        src: "/images/ImagesCarousel/placadetalhe.jpg",
        title: "RESIDENCIAL",
        subtitle: "Projeto Fotovoltaico de 42 KWp",
        cidade: "Minas Gerais - MG",
      },
    ],
  ];

  const navScreen = {
    0: "Tela 0",
    1: "Tela 1",
    2: "Tela 2",
  };

  const renderizarDivs = () => {
    const divs = [];

    const ResetValues = () => {
      let i = !indice;
      setIndice(i);
      setTimeout(() => {
        if (i) {
          setTheme(styles.customImage);
        } else {
          setTheme(styles.imageBack);
        }
      });
    };

    const nextIcon = (
      <span>
        <h1>
          <FiChevronRight size={40} />
        </h1>
      </span>
    );
    const prevIcon = (
      <span>
        <h1>
          <FiChevronLeft size={40} />
        </h1>
      </span>
    );

    for (let i = 0; i < 3; i++) {
      const scren = navScreen[1];
      divs.push(
        <div className={styles.containerItens}>
          <Carousel
            fade
            interval={8000}
            nextIcon={nextIcon}
            prevIcon={prevIcon}
            //pause={false}
            indicators={false}
            onSelect={() => ResetValues()}
          >
            {imagesList[i].map((l, il) => {
              return (
                <Carousel.Item className={theme}>
                  <img
                    style={{ width: "100%", height: "45vh", borderRadius: 5 }}
                    src={imagesList[i][il].src}
                    alt="Second slide"
                  />
                  <Carousel.Caption className={styles.infoStyle}>
                    <p>{imagesList[i][il].title}</p>
                    <div className={styles.containerCity}>
                      <h5 style={{ fontSize: 13 }}>
                        {imagesList[i][il].cidade}
                      </h5>
                    </div>
                    <div className={styles.containerSubTitle}>
                      <h6 style={{ fontSize: 13 }}>
                        {imagesList[i][il].subtitle}
                      </h6>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
          <div className={styles.containerButton}>
            <Button
              type={4}
              //marginTop={"5.5%"}
              heigth={45}
              width={200}
              text={"Confira"}
              onClick={() => alert(i)}
            />
          </div>
        </div>
      );
    }

    return <div className={styles.container}>{divs}</div>;
  };

  return renderizarDivs();
}

export default CarouselGroup;
