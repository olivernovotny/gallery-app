import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import styles from "./ImagePreview.module.scss";

function ImagePreview() {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContainer}>
        <img src="./images/no-image.png" alt="HD preview" />
        <IoCloseOutline className={styles.clickableIcon} size={25} />
      </div>
    </div>
  );
}

export default ImagePreview;
