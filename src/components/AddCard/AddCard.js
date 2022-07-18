import React from "react";
import { useTranslation } from "react-i18next";
import { CgAddR } from "react-icons/cg";
import styles from "./AddCard.module.scss";
import CardWrapper from "../layout/CardWrapper/CardWrapper";

function AddCard({ title, setIsModalOpen }) {
  const { t } = useTranslation();
  return (
    <CardWrapper>
      <div
        className={styles.onClickContainer}
        onClick={() => setIsModalOpen(true)}
        role="presentation"
      >
        <CgAddR size={20} opacity="32%" className={styles.addCardIcon} />
        <p className={styles.addCardText}>{t(title)}</p>
      </div>
    </CardWrapper>
  );
}

export default AddCard;
