import React from "react";
import styles from "./products.module.css";
import Image from "next/image";
const Card = ({ name, image, description, price, color }) => {
  return (
    <div className={styles.card}>
      <h3>{name}</h3>
      <div style={{ position: "relative", height: 300 }}>
        <Image fill={true} src={image} alt={name} />
      </div>
      <h2>{description}</h2>
      <span>{price}</span>
      <span>{color}</span>
    </div>
  );
};

export default Card;
