import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./InvalidPage.module.scss";

function InvalidPage() {
  const { t } = useTranslation();
  return <p className={styles.subtitle}>{t("invalid_page")}</p>;
}

export default InvalidPage;
