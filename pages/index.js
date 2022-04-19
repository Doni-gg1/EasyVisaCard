import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import MainSection from "../src/components/mainSection";
import AboutUs from "../src/components/AboutUs/AboutUs";
import Services from "../src/components/Services/Services";
import Cards from "../src/components/CardsSection/Cards";

export default function Home() {
  return (
    <div className={styles.container}>
      <MainSection/>
      <AboutUs/>
      <Services/>
      <Cards/>
    </div>
  )
}
