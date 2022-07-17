/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState, useRef, useEffect } from "react";
import {
  IoArrowBackOutline,
  IoArrowForwardOutline,
  IoClose,
} from "react-icons/io5";
import styles from "./ImagePreview.module.scss";
import getObjectArrayIndex from "../../utils/helpers/getObjectArrayIndex";

function ImagePreview({ imageData, setImageOpen, imageOpen }) {
  const focusableContainer = useRef();

  useEffect(() => {
    focusableContainer.current.focus();
  }, []);

  const [imageCounter, setImageCounter] = useState(
    getObjectArrayIndex(imageData, imageOpen)
  );

  return (
    <div className={styles.modalOverlay}>
      <div
        className={styles.modalContainer}
        tabIndex={0}
        ref={focusableContainer}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") {
            if (imageCounter === 0) {
              setImageCounter(imageData.length - 1);
            } else {
              setImageCounter(imageCounter - 1);
            }
          }
          if (e.key === "ArrowRight") {
            if (imageCounter + 1 === imageData.length) {
              setImageCounter(0);
            } else {
              setImageCounter(imageCounter + 1);
            }
          }
        }}
      >
        <img
          src={`${process.env.REACT_APP_API_URL}images/0x0/${imageData[imageCounter].fullpath}`}
          alt="HD preview"
        />
        <div
          className={styles.closeContainer}
          onClick={() => setImageOpen(false)}
        >
          <IoClose className={styles.closeIcon} size={24} />
        </div>
        <div
          className={styles.backContainer}
          onClick={() => {
            if (imageCounter === 0) {
              setImageCounter(imageData.length - 1);
            } else {
              setImageCounter(imageCounter - 1);
            }
          }}
        >
          <IoArrowBackOutline size={24} />
        </div>
        <div
          className={styles.forwardContainer}
          onClick={() => {
            if (imageCounter + 1 === imageData.length) {
              setImageCounter(0);
            } else {
              setImageCounter(imageCounter + 1);
            }
          }}
        >
          <IoArrowForwardOutline size={24} />
        </div>
      </div>
    </div>
  );
}

export default ImagePreview;
