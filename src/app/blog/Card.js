import React from "react";
import styles from "./posts.module.css";
const Card = ({ title, body }) => {
  return (
    <div className={styles.card}>
      <h3>{title}</h3>
      <h5>{body}</h5>
    </div>
  );
};

export default Card;
