import { useState } from "react";
import Carousel from "react-bootstrap/esm/Carousel";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import styles from "./carrousselList.module.scss";

export default function CarouselList() {
  const [indice, setIndice] = useState(true);
  const [theme, setTheme] = useState<string>("");

  const nextIcon = (
    <span style={{ marginLeft: "130%", position: "absolute", top: "35%" }}>
      <h1>
        <FiChevronRight size={40} />
      </h1>
    </span>
  );
  const prevIcon = (
    <span style={{ marginRight: "130%", position: "absolute", top: "35%" }}>
      <h1>
        <FiChevronLeft size={40} />
      </h1>
    </span>
  );

  const ArrayImage21 = [
    {
      image1: {
        image: "/images/ImagesCarousel/google.svg",
        starfive: "/images/ImagesCarousel/starfive.png",
        text: "image01",
        depoimento:
          "Minha experiência não podia ter sido melhor, por sorte achei a solarbraz, que ligando na empresa conversei com a Charlene, a pessoa que sanou todas minhas dúvidas e soube me explicar todo o funcionamento, cálculo do trocador que iria ser usado para aquecimento, cálculo de gasto de energia e todas as outras dúvidas.Sobre a instalação do produto: equipe muito bem preparada e com conhecimento de todo processo e fazem de tudo para ficar o melhor possível e todas as dúvidas de instalação sanada na hora.Pós vendas: A Charlene que foi a pessoa que me fez a venda, sempre entrando em contato sobre o funcionamento para saber se está tudo ok, quando foi preciso mexer na temperatura do trocador de calor, surgiu algumas dúvidas, entrei em contato com o Felipe que foi o responsável pela instalação e de imediato fez uma vídeo chamado e já resolvemos o problema e me orientou como fazer.Experiência nota 1000Indicaria a empresa despreocupado. AttEduardo Capelatto ForteSíndico",
      },
      image2: {
        image: "/images/ImagesCarousel/google.svg",
        starfive: "/images/ImagesCarousel/starfive.png",
        text: "image02",
        depoimento:
          "Gostaria de deixar um depoimento em relação ao atendimento da Consultora Charlene.Estou auxiliando meu filho na compra de um aquecimento para sua piscina, onde fui muito bem atendido e orientado pela mesma.Quero parabenizar a empresa por ter colaboradores bem treinados, com um conhecimento técnico sobre seu produto excepcional.Será importante também criar um departamento de inovação onde creio que a Charlene e restante vossa equipa poderão ter de modo poder fazer o upgrade de vosso equipamento tento em conta das tecnologias existentes no mercado .Quero também mencionar a Direção da Empresa que devem RETER está funcionária pela sua experiência e convicção de explicar ao cliente de uma forma clara tanto tecnicamente como comercialmente .Parabéns a Solarbraz nomeadamente pela Charlene .Anil MurargiDirector Desenvolvimento de Negócios na área de Eficiência Energética",
      },
      image3: {
        image: "/images/ImagesCarousel/google.svg",
        starfive: "/images/ImagesCarousel/starfive.png",
        text: "image01",
        depoimento:
          "Pessoas de Ricardo, Glace e Gislaine. Empresa recomendada para fornecimento e instalação de sistemas de aquecimento solar. Obrigado equipe Solarbraz.!",
      },
      image4: {
        image: "/images/ImagesCarousel/google.svg",
        starfive: "/images/ImagesCarousel/starfive.png",
        text: "image01",
        depoimento: "teste de depoimento de satisfação do cliente!",
      },
    },
    {
      image1: {
        image: "/images/ImagesCarousel/google.svg",
        starfive: "/images/ImagesCarousel/starfive.png",
        text: "image01",
        depoimento: "teste de depoimento de satisfação do cliente!",
      },
      image2: {
        image: "/images/ImagesCarousel/google.svg",
        starfive: "/images/ImagesCarousel/starfive.png",
        text: "image02",
        depoimento:
          "Pessoas de Ricardo, Glace e Gislaine. Empresa recomendada para fornecimento e instalação de sistemas de aquecimento solar. Obrigado equipe Solarbraz.",
      },
      image3: {
        image: "/images/ImagesCarousel/google.svg",
        starfive: "/images/ImagesCarousel/starfive.png",
        text: "image01",
        depoimento: "Atendimento super profissional e empresa muito pontual.",
      },
      image4: {
        image: "/images/ImagesCarousel/google.svg",
        starfive: "/images/ImagesCarousel/starfive.png",
        text: "image01",
        depoimento:
          "Minha experiência não podia ter sido melhor, por sorte achei a solarbraz, que ligando na empresa conversei com a Charlene, a pessoa que sanou todas minhas dúvidas e soube me explicar todo o funcionamento, cálculo do trocador que iria ser usado para aquecimento, cálculo de gasto de energia e todas as outras dúvidas.Sobre a instalação do produto: equipe muito bem preparada e com conhecimento de todo processo e fazem de tudo para ficar o melhor possível e todas as dúvidas de instalação sanada na hora.Pós vendas: A Charlene que foi a pessoa que me fez a venda, sempre entrando em contato sobre o funcionamento para saber se está tudo ok, quando foi preciso mexer na temperatura do trocador de calor, surgiu algumas dúvidas, entrei em contato com o Felipe que foi o responsável pela instalação e de imediato fez uma vídeo chamado e já resolvemos o problema e me orientou como fazer.Experiência nota 1000Indicaria a empresa despreocupado. AttEduardo Capelatto ForteSíndico",
      },
    },
  ];

  const listItens = () => {
    return ArrayImage21.map((images, index) => (
      <Carousel.Item key={index} className={theme}>
        <div className={styles.displayflex}>
          {Object.values(images).map((image, i) => (
            <div>
              <div className={styles.container}>
                <h5
                  style={{
                    fontSize: 17,
                    fontWeight: "700",
                    position: "absolute",
                    color: "rgb(66, 61, 61)",
                    top: "12%",
                    marginLeft: 29,
                  }}
                >
                  Claudio Damasceno
                </h5>
                <img
                  style={{
                    width: "6%",
                    position: "relative",
                    top: "-44%",
                    left: "90%",
                  }}
                  src={image.image}
                  alt="Second slide"
                />
                <img
                  style={{
                    width: "10%",
                    height: "7%",
                    position: "absolute",
                    top: "30%",
                    marginRight: "10.5%",
                  }}
                  src={image.starfive}
                  alt="Second slide"
                />
                <div className={styles.containerText}>
                  <h6
                    style={{
                      fontSize: 19,
                      color: "rgb(112, 107, 107)",
                      padding: "2%",
                      fontWeight: "600",
                    }}
                  >
                    {image.depoimento}
                  </h6>
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
