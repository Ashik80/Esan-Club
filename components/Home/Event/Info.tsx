import React from "react";
import styles from "./Info.module.css";

const Info = () => {
  return (
    <div className={styles.info}>
      <div className={styles.infoCard}>
        <h2 className={styles.header}>Esan club to the rescue!</h2>
        <p>We are all about helping people and making lives better</p>
        <ul className={styles.list}>
          <li>⭐️ Organize exciting events</li>
          <li>⭐️ Giveaways to less priviledged</li>
          <li>⭐️ Small projects</li>
        </ul>
        <button className={styles.button}>Our Events</button>
      </div>
    </div>
  );
};

export default Info;
