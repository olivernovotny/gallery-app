import React, { useState, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";
import { useGalleryQuery } from "../../hooks/queries";
import AddCard from "../AddCard/AddCard";
import ImageCard from "../ImageCard/ImageCard";
import AddPhotoModal from "../modal/AddPhotoModal/AddPhotoModal";
import styles from "./ImageList.module.scss";
import ImagePreview from "../ImagePreview/ImagePreview";

function ImageList() {
  const { id } = useParams();
  const { data, refetch } = useGalleryQuery(id);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isImageOpen, setIsImageOpen] = useState(false);

  useEffect(() => {
    refetch();
  }, [isModalOpen, refetch]);

  return (
    <div className={styles.mainContainer}>
      {data?.images.map((item) => (
        <ImageCard
          key={item.name}
          imagePath={item.fullpath}
          setIsImageOpen={setIsImageOpen}
        />
      ))}
      <AddCard title="Pridať fotky" setIsModalOpen={setIsModalOpen} />
      {isModalOpen ? <AddPhotoModal setIsModalOpen={setIsModalOpen} /> : null}
      {isImageOpen ? <ImagePreview /> : null}
      <ToastContainer
        position="bottom-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        closeButton={false}
        style={{ paddingRight: 0 }}
        pauseOnFocusLoss={false}
      />
    </div>
  );
}

export default ImageList;
