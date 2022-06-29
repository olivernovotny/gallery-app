import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import styles from "./ModalWrapper.module.scss";

function ModalWrapper({ title, children, setIsModalOpen }) {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <header>
          <h2>{title}</h2>
          <IoCloseOutline
            size={24}
            cursor="pointer"
            onClick={() => setIsModalOpen(false)}
          />
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
}

export default ModalWrapper;
