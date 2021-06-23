import React from "react";
import styles from "./AdCards.module.css";
import Image from "next/image";

interface IProps {
  logo: StaticImageData
  title: string;
  details: string;
}

const AdCards: React.FC<IProps> = ({logo, title, details}) => {
  return (
    <div className={styles.card}>
      <div>
        <Image src={logo} height={60} width={70} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.details}>{details}</p>
    </div>
  );
};

export default AdCards;
