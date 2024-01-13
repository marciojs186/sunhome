import { Player } from "@lottiefiles/react-lottie-player";
import React, { useState, useEffect, useRef } from "react";
import styles from "./styles.module.scss"; // Crie um arquivo CSS para estilizar o botão
import { ArrowUp, Arrow_up } from "../../lottie";

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const lottieRef: any = useRef(null);

  useEffect(() => {
    const animateButton = () => {
      lottieRef.current.play();
    };
    const intervalId = setInterval(animateButton, 8000);
    return () => clearInterval(intervalId);
  }, []);

  const handleScroll = () => {
    const yOffset = window.scrollY;
    if (yOffset > 1000) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    lottieRef.current.play();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`${styles["scroll-to-top-button"]} ${
        isVisible ? styles.visible : styles.hidden
      }`}
    >
      <button className={styles.buttonStyle} onClick={scrollToTop}>
        <div className={styles.lottieStyle}>
          <Player
            ref={lottieRef}
            src={Arrow_up}
            className="player"
            loop={false}
            autoplay={false}
            speed={1}
          />
        </div>
      </button>
    </div>
  );
};
