import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import MainSection from "../src/components/mainSection";
import AboutUs from "../src/components/AboutUs/AboutUs";
import Services from "../src/components/Services/Services";
import Cards from "../src/components/CardsSection/Cards";
import Tutorial from "../src/components/TutorialSection/Tutorial";
import Banks from "../src/components/Banks/Banks";
import Questions from "../src/components/Questions/Questions";
import Requisites from "../src/components/Requisites/Requisites";
import Footer from "../src/components/Footer/Footer";
import { useEffect, useRef, useState } from "react";
import telegramIcon from "../src/assets/svg/Telegram-icon2.svg";
// import useElementOnScreen from "../src/customHooks/hooks";

export default function Home() {
  const [isVisible, setIsVisible] = useState(true);
  console.log(isVisible);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      const { innerHeight, pageYOffset } = window;
      setIsVisible(200 >= (pageYOffset || 0));
    });
    return window.removeEventListener("scroll", () => {
      const { innerHeight, pageYOffset } = window;
      setIsVisible(innerHeight >= pageYOffset);
    });
  }, []);
  return (
    <div className={styles.container}>
      <a href={'#'}
        className={
          !isVisible ? styles.telegramIconActive : styles.telegramIconNotActive
        }
      >
        {" "}
        <Image src={telegramIcon} />
      </a>
      <MainSection />
      <AboutUs />
      <Services />
      <Cards />
      <Tutorial />
      <Banks />
      <Questions />
      <Requisites />
      <Footer />
    </div>
  );
}
