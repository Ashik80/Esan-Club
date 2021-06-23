import React from "react";
import Quote from "./Quote";
import styles from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.moto}>
        <p>Welcome!</p>
        <h1>Manobotar Shondhane, Toruner bondhone</h1>
        <p>Join our cause</p>
        <button className={styles.button}>About Us</button>
      </div>
      <Quote />
    </div>
  );
};

export default Banner;
