import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { IoCloseOutline } from "react-icons/io5";
import styles from "./ModalWrapper.module.scss";

function ModalWrapper({ title, children, setIsModalOpen }) {
  const focusableDiv = useRef(null);
  const { t } = useTranslation();

  useEffect(() => {
    focusableDiv.current.focus();
  });

  return (
    <div
      className={styles.modalOverlay}
      tabIndex={0}
      ref={focusableDiv}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          setIsModalOpen(false);
        }
      }}
    >
      <div className={styles.modalContainer}>
        <header>
          <h2>{t(title)}</h2>
          <IoCloseOutline
            tabIndex={0}
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
