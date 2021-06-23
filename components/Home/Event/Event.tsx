import React from "react";
import styles from "./Event.module.css";
import Info from "./Info";

const Event = () => {
  return (
    <div className={styles.event}>
      <h1 className={styles.header}>What we do</h1>
      <div className={styles.showCase}>
        <div className={styles.imageContainer}>
          <div className={styles.image}></div>
        </div>
        <Info />
      </div>
    </div>
  );
};

export default Event;
