import React from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import styles from "./GalleryDetail.module.scss";
import { ImageList } from "../../components";

function GalleryDetail() {
  const { id } = useParams();

  return (
    <>
      <div className={styles.subtitleContainer}>
        <Link to="/">
          <BiArrowBack className={styles.backIcon} size={22} />
        </Link>
        <p className={styles.subtitle}>{id}</p>
      </div>
      <ImageList />
    </>
  );
}

export default GalleryDetail;
