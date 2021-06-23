import React from "react";
import Image from "next/image";
import logo from "./esan.png";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.background}></div>
      <div className={styles.logo}>
        <Image src={logo} height="70" width="70" />
      </div>
      <ul className={styles.list}>
        <li>Home</li>
        <li>Our work</li>
        <li>About us</li>
      </ul>
      <hr className={styles.divider} />
      <div className={styles.copyright}>
          &copy; All Rights Reserved 2021
      </div>
    </div>
  );
};

export default Footer;
