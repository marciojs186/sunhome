import { Player } from "@lottiefiles/react-lottie-player";
import React, { useState, useEffect, useRef } from "react";
import styles from "./styles.module.scss"; // Crie um arquivo CSS para estilizar o botão
import { ArrowUp, Arrow_up, Zap_anin } from "../../lottie";

interface IProps {
  iconName?: keyof IIconType;
}
interface IIconType {
  arrow: string;
  arrow_up: string;
  zap: string;
}

export function ScrollToTopButton({ iconName = "arrow_up" }: IProps) {
  const [isVisible, setIsVisible] = useState(false);
  const lottieRef: any = useRef(null);

  const imageScrool: IIconType = {
    arrow: ArrowUp,
    arrow_up: Arrow_up,
    zap: Zap_anin,
  };

  const iconType = imageScrool[iconName];

  console.log(iconType);

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
            src={iconType}
            className="player"
            loop={false}
            autoplay={false}
            speed={1}
          />
        </div>
      </button>
    </div>
  );
}
