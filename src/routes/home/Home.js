import React from "react";
import { useTranslation } from "react-i18next";
import { CardList } from "../../components";
import styles from "./Home.module.scss";

function Home() {
  const { t } = useTranslation();
  return (
    <>
      <p className={styles.subtitle}>{t("categories")}</p>
      <CardList />
    </>
  );
}

export default Home;
