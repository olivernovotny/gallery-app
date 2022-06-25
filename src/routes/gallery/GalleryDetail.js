import React from "react";
import { useQuery } from "react-query";
import { BiArrowBack } from "react-icons/bi";
import { Link, useParams } from "react-router-dom";
import { fetchApiData } from "../../api/fetch";
import styles from "./GalleryDetail.module.scss";

function GalleryDetail() {
  const { id } = useParams();
  const { data } = useQuery(["gallery", id], () =>
    fetchApiData(`/gallery/${id}`)
  );

  if (data) {
    console.log(data);
  }
  return (
    <div className={styles.subtitleContainer}>
      <Link to="/">
        <BiArrowBack className={styles.backIcon} size={22} />
      </Link>
      <p className={styles.subtitle}>{id}</p>
    </div>
  );
}

export default GalleryDetail;
