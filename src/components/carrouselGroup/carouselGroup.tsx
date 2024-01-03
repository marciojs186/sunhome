import { useState } from "react";
import Carousel from "react-bootstrap/esm/Carousel";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import styles from "./carrousselGroup.module.scss";

function CarouselGroup() {
  const [indice, setIndice] = useState(true);
  const [theme, setTheme] = useState<string>("");

  let imagesList = [
    [
      { src: "/images/ImagesCarousel/placadetalhe.jpg", title: "Teste 1" },
      { src: "/images/ImagesCarousel/placatelhado.jpg", title: "Teste 2" },
      { src: "/images/ImagesCarousel/placadetalhe.jpg", title: "Teste 3" },
    ],
    [
      { src: "/images/ImagesCarousel/satisfacao.jpg", title: "Teste 1" },
      { src: "/images/ImagesCarousel/placahome.jpg", title: "Teste 2" },
      { src: "/images/ImagesCarousel/monitorar.jpg", title: "Teste 3" },
    ],
    [
      { src: "/images/ImagesCarousel/eficiencia.jpg", title: "Teste 1" },
      { src: "/images/ImagesCarousel/clientes.jpg", title: "Teste 2" },
      { src: "/images/ImagesCarousel/qualidade.jpg", title: "Teste 3" },
      { src: "/images/ImagesCarousel/placadetalhe.jpg", title: "Teste 4" },
    ],
  ];

  console.log(">>>>>>> ", imagesList[2][1].src);

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
                    style={{ width: "100%", height: "45vh", borderRadius: 5 }}
                    src={imagesList[i][il].src}
                    alt="Second slide"
                  />
                  <Carousel.Caption className={styles.infoStyle}>
                    <p style={{ width: 110 }}>{imagesList[i][il].title}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      );
    }

    return <div className={styles.container}>{divs}</div>;
  };

  return renderizarDivs();
}

export default CarouselGroup;
