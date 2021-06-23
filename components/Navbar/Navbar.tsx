import React from "react";
import styles from "./Navbar.module.css";
import logo from "./esan-logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image src={logo} height="100%" width="100%" />
      </div>
      <ul className={styles.navlist}>
        <li>Home</li>
        <li>Our work</li>
        <li>About us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
