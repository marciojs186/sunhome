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
        avatar: "/images/ImagesCarousel/checkplaca.jpg",
        cliente: "Marcos Ribeiro",
        post: "1 mês atrás",
        starfive: "/images/ImagesCarousel/starfive.png",
        text: "image01",
        depoimento:
          "Minha experiência não podia ter sido melhor, por sorte achei a solarbraz, que ligando na empresa conversei com a Charlene, a pessoa que sanou todas minhas dúvidas e soube me explicar todo o funcionamento, cálculo do trocador que iria ser usado para aquecimento, cálculo de gasto de energia e todas as outras dúvidas.Sobre a instalação do produto: equipe muito bem preparada e com conhecimento de todo processo e fazem de tudo para ficar o melhor possível e todas as dúvidas de instalação sanada na hora.Pós vendas: A Charlene que foi a pessoa que me fez a venda, sempre entrando em contato sobre o funcionamento para saber se está tudo ok, quando foi preciso mexer na temperatura do trocador de calor, surgiu algumas dúvidas, entrei em contato com o Felipe que foi o responsável pela instalação e de imediato fez uma vídeo chamado e já resolvemos o problema e me orientou como fazer.Experiência nota 1000Indicaria a empresa despreocupado. AttEduardo Capelatto ForteSíndico",
      },
      image2: {
        image: "/images/ImagesCarousel/google.svg",
        avatar: "/images/ImagesCarousel/placatelhado.jpg",
        cliente: "Mario Goes",
        post: "8 meses atrás",
        starfive: "/images/ImagesCarousel/starfive.png",
        text: "image02",
        depoimento:
          "Gostaria de deixar um depoimento em relação ao atendimento da Consultora Charlene.Estou auxiliando meu filho na compra de um aquecimento para sua piscina, onde fui muito bem atendido e orientado pela mesma.Quero parabenizar a empresa por ter colaboradores bem treinados, com um conhecimento técnico sobre seu produto excepcional.Será importante também criar um departamento de inovação onde creio que a Charlene e restante vossa equipa poderão ter de modo poder fazer o upgrade de vosso equipamento tento em conta das tecnologias existentes no mercado .Quero também mencionar a Direção da Empresa que devem RETER está funcionária pela sua experiência e convicção de explicar ao cliente de uma forma clara tanto tecnicamente como comercialmente .Parabéns a Solarbraz nomeadamente pela Charlene .Anil MurargiDirector Desenvolvimento de Negócios na área de Eficiência Energética",
      },
      image3: {
        image: "/images/ImagesCarousel/google.svg",
        avatar: "/images/ImagesCarousel/checkplaca.jpg",
        cliente: "Fabio Costa",
        post: "2 meses atrás",
        starfive: "/images/ImagesCarousel/starfive.png",
        text: "image01",
        depoimento:
          "Pessoas de Ricardo, Glace e Gislaine. Empresa recomendada para fornecimento e instalação de sistemas de aquecimento solar. Obrigado equipe Solarbraz.!",
      },
      image4: {
        image: "/images/ImagesCarousel/google.svg",
        avatar: "/images/ImagesCarousel/placahome.jpg",
        cliente: "Mariana Sales",
        post: "1 ano atrás",
        starfive: "/images/ImagesCarousel/starfive.png",
        text: "image01",
        depoimento: "teste de depoimento de satisfação do cliente!",
      },
    },
    {
      image1: {
        image: "/images/ImagesCarousel/google.svg",
        avatar: "/images/ImagesCarousel/trabalhadorSolar.jpg",
        cliente: "Robson Lobato",
        post: "5 meses atrás",
        starfive: "/images/ImagesCarousel/starfive.png",
        text: "image01",
        depoimento: "teste de depoimento de satisfação do cliente!",
      },
      image2: {
        image: "/images/ImagesCarousel/google.svg",
        avatar: "/images/ImagesCarousel/checkplaca.jpg",
        cliente: "Douglas Bonfin",
        post: "1 mês atrás",
        starfive: "/images/ImagesCarousel/starfive.png",
        text: "image02",
        depoimento:
          "Pessoas de Ricardo, Glace e Gislaine. Empresa recomendada para fornecimento e instalação de sistemas de aquecimento solar. Obrigado equipe Solarbraz.",
      },
      image3: {
        image: "/images/ImagesCarousel/google.svg",
        avatar: "/images/ImagesCarousel/placahome.jpg",
        cliente: "Eduardo Martins",
        post: "12 meses atrás",
        starfive: "/images/ImagesCarousel/starfive.png",
        text: "image01",
        depoimento: "Atendimento super profissional e empresa muito pontual.",
      },
      image4: {
        image: "/images/ImagesCarousel/google.svg",
        avatar: "/images/ImagesCarousel/trabalhadorSolar.jpg",
        cliente: "Beatriz Colin",
        post: "1 ano atrás",
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
            <div className={styles.contentText}>
              <div className={styles.container}>
                <span>{image.cliente}</span>
                <div className={styles.containerAvatar}>
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 55,
                    }}
                    src={image.avatar}
                    alt="Second slide"
                  />
                </div>
                <p className={styles.p}>{image.post}</p>
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
                    top: "27%",
                    marginRight: "10.5%",
                  }}
                  src={image.starfive}
                  alt="Second slide"
                />
                <div className={styles.containerText}>
                  <h6 className={styles.textDepoimento}>{image.depoimento}</h6>
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
