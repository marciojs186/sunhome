/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from "react";
import { Button } from "../../components/buttons/animatedButton";
import { Header } from "../../components/header";

import { Link } from "react-router-dom";

import styles from "./somosMais.module.scss";
import { Footer } from "../../components/footer";
import { ScrollToTopButton } from "../../components/buttonScrolTopScreen/buttonScrollTopScreen";

export function SomosMais() {
  return (
    <div className={styles.container}>
      <div style={{ position: "absolute", top: 75, left: 85 }}>
        <Link to={"/"}>
          <Button
            type={7}
            text={"Home"}
            fontSize={20}
            width={60}
            heigth={30}
            marginLeft={"8%"}
          />
        </Link>
      </div>
      <div className={styles.containerTop}>
        <Header />
        <div className={styles.infoStyle}>
          <div className={styles.containerTitle}>
            <div className={styles.containerStatuto}>
              <div className={styles.contentImg}>
                <img
                  src="/images/imagesCarousel/clientes.jpg"
                  alt="Satisfação"
                  width={360}
                  height={200}
                  style={{ background: "yellowgreen", paddingBottom: 6 }}
                />
              </div>
              <h1
                style={{
                  position: "absolute",
                  paddingLeft: "54%",
                  paddingTop: "20.8%",
                }}
              >
                Quem Somos
              </h1>
            </div>
          </div>
        </div>
        <div className={styles.content}>
          <img
            src="/images/you_solar_placa.png"
            alt="Satisfação"
            style={{ background: "yellowgreen", paddingBottom: 6 }}
          />
        </div>
      </div>
      <div className={styles.containerSubTitle}>
        <div className={styles.infoStyle}>
          <div className={styles.infoStyle}>
            <img
              src="/images/logoinsta.png"
              alt="Satisfação"
              width={80}
              height={80}
              style={{ position: "relative", right: 10, top: -2 }}
            />
            <span>SOLAR META</span>
          </div>
          <hr style={{ width: "26%", color: "yellowgreen" }} />
          <p>
            Empresa Paulistana com as melhores soluções em Energia Solar
            fotovoltaica. Soluções Sustentáveis e Eficientes em Geração de
            Energia pra você garantir economia e sustentabilidade.
            <br />
            <br />
            Conte Conosco Para fazer o seu projeto Seja em sua Residência,
            Empresa ou Propriedade Rural. Contate-nos e Garanta sua Economia.
            <br />
            <br />O que nos diferencia é a nossa abordagem centrada no cliente,
            focada em criar soluções personalizadas que se traduzem em redução
            de custos e um retorno de investimento satisfatório a médio e longo
            prazo.
            <br />
            <br />
            Com uma equipe capacitada e um amplo escopo, garantimos que todo o
            processo de implantação de do sistema fotovoltaico será conduzido de
            forma segura e eficiente. Essa abordagem é o que torna a{" "}
            <span>Solar Meta</span> a escolha confiável e completa para quem
            busca autossuficiência e economia.
          </p>
          <hr style={{ width: "52%", color: "yellowgreen" }} />
        </div>
      </div>
      <div className={styles.contentPilares}>
        <h5
          style={{
            position: "absolute",
            marginTop: "-3.3%",
            fontSize: 19,
            color: "rgb(211, 199, 199)",
            width: "62%",
          }}
        >
          Atendemos cada cliente dentro de suas necessidades procurando
          equilibrar custo e benefício. Ser referência no atendimento
          especialmente na utilização de fontes energéticas sustentáveis.
        </h5>
        <div className={styles.imgsSides}>
          <img
            src="/images/you_solar_placa.png"
            alt="Satisfação"
            width={"30%"}
            height={"30%"}
            style={{
              marginRight: 25,
              background: "yellowgreen",
              paddingBottom: 6,
            }}
          />
          <img
            src="/images/you_solar_placa.png"
            alt="Satisfação"
            width={"30%"}
            height={"30%"}
            style={{
              marginLeft: 25,
              background: "yellowgreen",
              paddingBottom: 6,
            }}
          />
        </div>
      </div>
      <div className={styles.infoStyle}>
        <div className={styles.titleValores}>
          <h3>Valores – Pilares do nosso Sucesso</h3>
        </div>
        <div className={styles.valores}>
          <div
            style={{
              width: 340,
              height: 50,
              background: "yellowgreen",
              margin: 25,
            }}
          >
            <div className={styles.containerValores}>
              <img
                src="/images/sustentavel.svg"
                alt="Satisfação"
                width={"9%"}
                style={{
                  paddingBottom: 10,
                }}
              />
              <h6 style={{ marginLeft: 60, paddingTop: 5 }}>
                Sustentabilidade
              </h6>
            </div>
            <div
              style={{
                height: "auto",
                marginTop: "5%",
                padding: "2%",
                color: "rgba(211, 199, 199)",
              }}
            >
              <h6>
                Compromisso em promover a utilização de energia limpa e
                renovável afim de reduzir o impacto ambiental e contribuir para
                um mundo mais sustentável.
              </h6>
            </div>
          </div>
          <div
            style={{
              width: 340,
              height: 50,
              background: "yellowgreen",
              margin: 25,
            }}
          >
            <div className={styles.containerValores}>
              <img
                src="/images/quality.svg"
                alt="Satisfação"
                width={"10%"}
                style={{
                  paddingBottom: 10,
                }}
              />
              <h6 style={{ marginLeft: 60, paddingTop: 5 }}>Qualidade</h6>
            </div>
            <div
              style={{
                height: "auto",
                marginTop: "5%",
                padding: "2%",
                color: "rgba(211, 199, 199)",
              }}
            >
              <h6>
                Oferecer produtos e serviços de alta qualidade, utilizando
                tecnologias avançadas e materiais duráveis.
              </h6>
            </div>
          </div>
          <div className={styles.valores}>
            <div
              style={{
                width: 340,
                height: 50,
                background: "yellowgreen",
                margin: 25,
              }}
            >
              <div className={styles.containerValores}>
                <img
                  src="/images/conversation.svg"
                  alt="Satisfação"
                  width={"10%"}
                  style={{
                    paddingBottom: 10,
                  }}
                />
                <h6 style={{ marginLeft: 60, paddingTop: 5 }}>Transparência</h6>
              </div>
              <div
                style={{
                  height: "auto",
                  marginTop: "5%",
                  padding: "2%",
                  color: "rgba(211, 199, 199)",
                }}
              >
                <h6>
                  Agir com honestidade, transparência e ética em todas as
                  interações com os clientes, fornecedores e parceiros
                  comerciais.
                </h6>
              </div>
            </div>
          </div>
        </div>
        {/* segundo bloco container abaixo dos pilares */}
        <div className={styles.valores}>
          <div
            style={{
              width: 340,
              height: 50,
              background: "yellowgreen",
              margin: 25,
            }}
          >
            <div className={styles.containerValores}>
              <img
                src="/images/ecologic-light.svg"
                alt="Satisfação"
                width={"9%"}
                style={{
                  paddingBottom: 10,
                }}
              />
              <h6 style={{ marginLeft: 60, paddingTop: 5 }}>Inovação</h6>
            </div>
            <div
              style={{
                height: "auto",
                marginTop: "5%",
                padding: "2%",
                color: "rgba(211, 199, 199)",
              }}
            >
              <h6>
                Estamos constantemente buscando melhorias e tecnologias que
                possam agregar valor aos nossos produtos e serviços, sempre
                focando na melhor experiência de nossos clientes.
              </h6>
            </div>
          </div>
          <div
            style={{
              width: 340,
              height: 50,
              background: "yellowgreen",
              margin: 25,
            }}
          >
            <div className={styles.containerValores}>
              <img
                src="/images/star_icon.svg"
                alt="Satisfação"
                width={"10%"}
                style={{
                  paddingBottom: 10,
                }}
              />
              <h6 style={{ marginLeft: 60, paddingTop: 5 }}>Excelência</h6>
            </div>
            <div
              style={{
                height: "auto",
                marginTop: "5%",
                padding: "2%",
                color: "rgba(211, 199, 199)",
              }}
            >
              <h6>
                Nosso compromisso é entregar produtos e serviços de alta
                qualidade, superando as expectativas dos clientes e
                estabelecendo padrões elevados em todas as nossas operações.
              </h6>
            </div>
          </div>
          <div className={styles.valores}>
            <div
              style={{
                width: 340,
                height: 50,
                background: "yellowgreen",
                margin: 25,
              }}
            >
              <div className={styles.containerValores}>
                <img
                  src="/images/partners.svg"
                  alt="Satisfação"
                  width={"14%"}
                  style={{
                    paddingBottom: 5,
                  }}
                />
                <h6 style={{ marginLeft: 60, paddingTop: 5 }}>Parceria</h6>
              </div>
              <div
                style={{
                  height: "auto",
                  marginTop: "5%",
                  padding: "2%",
                  color: "rgba(211, 199, 199)",
                }}
              >
                <h6>
                  Valorizamos relacionamentos sólidos com nossos clientes,
                  colaboradores e fornecedores, baseados na confiança mútua,
                  cooperação e benefícios mútuos.
                </h6>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <ScrollToTopButton />
        <Footer />
      </div>
    </div>
  );
}
