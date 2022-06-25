import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";
import CardWrapper from "../layout/CardWrapper/CardWrapper";
import { API_URL } from "../../utils/constants";

function Card({ galleryName, imagePath }) {
  return (
    <CardWrapper>
      <Link to={`/gallery/${galleryName}`} className={styles.linkContainer}>
        <img
          src={
            imagePath
              ? `${API_URL}/images/300x300/${imagePath}`
              : "./images/no-image.png"
          }
          alt={imagePath ? "Gallery title." : "Gallery has no title."}
          width="100%"
          height="75%"
        />
        <div className={styles.textContainer}>{galleryName}</div>
      </Link>
    </CardWrapper>
  );
}

export default Card;
