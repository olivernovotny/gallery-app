import React from "react";
import styles from "./PageWrapper.module.scss";

function PageWrapper({ children, title }) {
  return (
    <div className={styles.mainContainer}>
      <h1>{title}</h1>
      {children}
    </div>
  );
}

export default PageWrapper;
