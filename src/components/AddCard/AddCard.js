import React from "react";
import { CgAddR } from "react-icons/cg";
import styles from "./AddCard.module.scss";
import CardWrapper from "../layout/CardWrapper/CardWrapper";

function AddCard({ title }) {
  return (
    <CardWrapper>
      <CgAddR size={20} opacity="32%" />
      <p className={styles.addCardText}>{title}</p>
    </CardWrapper>
  );
}

export default AddCard;
