import React from "react";
import styles from "./posts.module.css";
const layout = ({ children }) => {
  return <div className={styles.layout}>{children}</div>;
};

export default layout;
