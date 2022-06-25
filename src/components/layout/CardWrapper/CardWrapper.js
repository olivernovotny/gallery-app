import React from "react";
import styles from "./CardWrapper.module.scss";

function CardWrapper({ children }) {
  return <div className={styles.cardContainer}>{children}</div>;
}

export default CardWrapper;
