import Head from "next/head";
import React from "react";
import Footer from "../components/Footer/Footer";
import Advertise from "../components/Home/Advertise/Advertise";
import Banner from "../components/Home/Banner/Banner";
import Event from "../components/Home/Event/Event";
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Esan Club</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/esan.png" />
      </Head>

      <Navbar />
      <div className={styles.container}>
        <Banner />
      </div>
      <div className={styles.componentGap}>
        <Advertise />
      </div>
      <div className={styles.componentGap + " " + styles.container}>
        <Event />
      </div>
      <div className={styles.componentGap} style={{overflow: "hidden"}}>
        <Footer />
      </div>
    </div>
  );
}