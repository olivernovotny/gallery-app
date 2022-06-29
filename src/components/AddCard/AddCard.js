import React from "react";
import { CgAddR } from "react-icons/cg";
import styles from "./AddCard.module.scss";
import CardWrapper from "../layout/CardWrapper/CardWrapper";

function AddCard({ title, setIsModalOpen }) {
  return (
    <CardWrapper>
      <div
        className={styles.onClickContainer}
        onClick={() => setIsModalOpen(true)}
        role="presentation"
      >
        <CgAddR size={20} opacity="32%" className={styles.addCardIcon} />
        <p className={styles.addCardText}>{title}</p>
      </div>
    </CardWrapper>
  );
}

export default AddCard;
