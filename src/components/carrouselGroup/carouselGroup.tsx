import { useState } from "react";
import Carousel from "react-bootstrap/esm/Carousel";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Button } from "../buttons/animatedButton";
import styles from "./carrousselGroup.module.scss";
import { ImagesListProps, navegacaoProps } from "./carousel.types";

function CarouselGroup() {
  const [indice, setIndice] = useState(true);
  const [theme, setTheme] = useState<string>("");

  let imagesList: ImagesListProps = [
    [
      {
        src: "/images/imagensYouSolar/img_00.jpg",
        title: "RESIDENCIAL",
        description: "Projeto Fotovoltaico de 8 KWp",
        cidade: "São Paulo - SP",
      },
      {
        src: "/images/imagensYouSolar/img_01.jpg",
        title: "RESIDENCIAL",
        description: "Projeto Fotovoltaico de 8 KWp",
        cidade: "São Paulo - SP",
      },
      {
        src: "/images/imagensYouSolar/img_quadro_00.jpg",
        title: "RESIDENCIAL",
        description: "Projeto Fotovoltaico de 8 KWp",
        cidade: "São Paulo - SP",
      },
    ],
    [
      {
        src: "/images/imagensYouSolar/img_03.jpg",
        title: "FAZENDA",
        description: "Projeto Fotovoltaico de 11 KWp",
        cidade: "Rio de Janeiro - RJ",
      },
      {
        src: "/images/imagensYouSolar/img_04.jpg",
        title: "FAZENDA",
        description: "Projeto Fotovoltaico de 11 KWp",
        cidade: "Rio de Janeiro - RJ",
      },
      {
        src: "/images/imagensYouSolar/img_quadro_01.jpg",
        title: "FAZENDA",
        description: "Projeto Fotovoltaico de 11 KWp",
        cidade: "Rio de Janeiro - RJ",
      },
    ],
    [
      {
        src: "/images/imagensYouSolar/img_05.jpg",
        title: "RESIDENCIAL",
        description: "Projeto Fotovoltaico de 42 KWp",
        cidade: "Minas Gerais - MG",
      },
      {
        src: "/images/imagensYouSolar/img_06.jpg",
        title: "RESIDENCIAL",
        description: "Projeto Fotovoltaico de 42 KWp",
        cidade: "Minas Gerais - MG",
      },
      {
        src: "/images/imagensYouSolar/img_quadro_02.jpg",
        title: "RESIDENCIAL",
        description: "Projeto Fotovoltaico de 42 KWp",
        cidade: "Minas Gerais - MG",
      },
    ],
  ];

  const navegar: navegacaoProps = {
    0: "Tela 1",
    1: "Tela 2",
    2: "Tela 3",
    default: "null",
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
                    style={{
                      width: "100%",
                      height: "45vh",
                      borderRadius: 5,
                    }}
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
                      <h6 className={styles.h6} style={{ fontSize: 13 }}>
                        {imagesList[i][il].description}
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
              onClick={() => alert(navegar[i])}
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
