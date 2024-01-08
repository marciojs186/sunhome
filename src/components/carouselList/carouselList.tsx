import { useState } from "react";
import Carousel from "react-bootstrap/esm/Carousel";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import styles from "./carrousselList.module.scss";

export default function CarouselList() {
  const [indice, setIndice] = useState(true);
  const [theme, setTheme] = useState<string>("");

  const nextIcon = (
    <span style={{ marginLeft: "120%" }}>
      <h1>
        <FiChevronRight size={40} />
      </h1>
    </span>
  );
  const prevIcon = (
    <span style={{ marginRight: "120%" }}>
      <h1>
        <FiChevronLeft size={40} />
      </h1>
    </span>
  );

  const ArrayImage21 = [
    {
      image1: {
        image: "/images/ImagesCarousel/placadetalhe.jpg",
        text: "image01",
      },
      image2: {
        image: "/images/ImagesCarousel/placahome.jpg",
        text: "image02",
      },
      image3: {
        image: "/images/ImagesCarousel/placadetalhe.jpg",
        text: "image01",
      },
      image4: {
        image: "/images/ImagesCarousel/checkplaca.jpg",
        text: "image01",
      },
    },
    {
      image1: {
        image: "/images/ImagesCarousel/placadetalhe.jpg",
        text: "image01",
      },
      image2: {
        image: "/images/ImagesCarousel/placahome.jpg",
        text: "image02",
      },
      image3: {
        image: "/images/ImagesCarousel/placadetalhe.jpg",
        text: "image01",
      },
      image4: {
        image: "/images/ImagesCarousel/checkplaca.jpg",
        text: "image01",
      },
    },
  ];

  const listItens = () => {
    return ArrayImage21.map((images, index) => (
      <Carousel.Item key={index} className={theme}>
        <div className={styles.displayflex}>
          {Object.values(images).map((image, i) => (
            <div>
              <div
                style={{
                  width: "45vh",
                  height: "40vh",
                  display: "flex",
                  marginLeft: 5,
                  borderRadius: 5,
                  backgroundColor: "green",
                  alignItems: "center",
                  justifyContent: "center",
                  // backgroundImage: `url(${image.image})`,
                  backgroundSize: "cover",
                }}
              >
                <div
                  style={{
                    backgroundColor: "white",
                    width: 120,
                    height: 50,
                    display: "flex",
                    alignSelf: "center",
                  }}
                >
                  <h6 style={{ alignSelf: "center" }}>Texto</h6>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Carousel.Item>
    ));
  };

  return (
    <div className={styles.containerItens}>
      <Carousel indicators={false} nextIcon={nextIcon} prevIcon={prevIcon}>
        {listItens()}
      </Carousel>
    </div>
  );
}
