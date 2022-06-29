import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.scss";
import CardWrapper from "../layout/CardWrapper/CardWrapper";
import getFullImagePath from "../../utils/helpers/getFullImagePath";

function Card({ galleryName, imagePath }) {
  const [fullImagePath, setFullImagePath] = useState(
    getFullImagePath(imagePath)
  );

  return (
    <CardWrapper>
      <Link to={`/gallery/${galleryName}`} className={styles.linkContainer}>
        <img
          src={fullImagePath}
          alt={imagePath ? "Gallery title." : "Gallery has no title."}
          onError={() => setFullImagePath("./images/no-image.png")}
          loading="lazy"
          width="100%"
          height="75%"
        />
        <div className={styles.textContainer}>{galleryName}</div>
      </Link>
    </CardWrapper>
  );
}

export default Card;
