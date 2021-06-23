import React from "react";
import AdCards from "./AdCards";
import styles from "./Advertise.module.css";
import works from "./cardContents";

const Advertise = () => {
  return (
    <div className={styles.advertise}>
      <h1 className={styles.header}>Who we are</h1>
      <div className={styles.background}></div>
      <div className={styles.adcards}>
        {works.map((work) => (
          <AdCards
            key={work.id}
            logo={work.logo}
            title={work.title}
            details={work.details}
          />
        ))}
      </div>
    </div>
  );
};

export default Advertise;
