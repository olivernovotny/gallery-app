import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./PageWrapper.module.scss";
import i18n from "../../../languague/i18n";

function PageWrapper({ children, title }) {
  const { t } = useTranslation();

  const handleLanguageChange = (languague) => {
    i18n.changeLanguage(languague);
  };
  return (
    <div className={styles.mainContainer}>
      <div className={styles.titleContainer}>
        <h1>{t(title)}</h1>
        <div className={styles.buttonContainer}>
          <span onClick={() => handleLanguageChange("en")}>en</span>/
          <span onClick={() => handleLanguageChange("sk")}>sk</span>
        </div>
      </div>
      {children}
    </div>
  );
}

export default PageWrapper;
